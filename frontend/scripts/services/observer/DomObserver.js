export class DomObserver {
    /**
     * Observes DOM changes and runs a callback when a matching element appears.
     *
     * @param {Element} target
     * @param {(el: Element) => boolean} matcher
     * @param {(el: Element, controls: object) => void} callback
     * @returns {object} controls
     */
    
    observe(target = document.body, matcher, callback) {
        const root = target || document.body;
        const blackList = new WeakSet();

        let observer = null;
        let stopped = false;

        const controls = {
            disconnect() {
                stopped = true;
                if (observer) {
                    observer.disconnect();
                }
            }
        };

        const processElement = (element) => {
            if (stopped) return;
            if (!(element instanceof Element)) return;
            if (blackList.has(element)) return;

            if (matcher(element)) {
                blackList.add(element);
                callback(element, controls);
            }
        };

        const scanElement = (node) => {
            if (stopped) return;
            if (!(node instanceof Element)) return;

            processElement(node);

            node.querySelectorAll("*").forEach((child) => {
                processElement(child);
            });
        };

        scanElement(root);

        if (stopped) {
            return controls;
        }

        observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    scanElement(node);
                });
            });
        });

        observer.observe(root, {
            childList: true,
            subtree: true
        });

        return controls;
    }
}

//export { DomObserver };