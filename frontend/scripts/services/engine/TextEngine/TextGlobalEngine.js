import { TextCore } from "./TextCore.js";
export class TextGlobalEngine extends TextCore {
    constructor(name = "lang-engine") {
        super(name);
    }
    async start() {
        await this.init();
        await this.#applyingText();
    }
    async init() {
        await super.init();
        this.DomObserver = new (await this.sysLib.services.observer.DomObserver()).DomObserver();
    }
    async #applyingText() {
        const domObserver = this.DomObserver;
    console.log(this.name);
        domObserver.observe(
            
            document.body,
            el => el.getAttribute(this.name) !== null,
            async (el, controls) => {
                const key = el.getAttribute(this.name);

                console.log(key);
                const t = await this.build(key);
                console.log("Thats was unresolved: " + t.unresolved);
                el.textContent = t.text;
            }
        )
    }
}