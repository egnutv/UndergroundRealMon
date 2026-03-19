import { DomObserver } from "./services/observer/DomObserver.js";

export class Events {
    constructor() {
        this.domObserver = new DomObserver();
    }

    el(target = document.body, matcher, action, events) {
        this.domObserver.observe(
            target,
            matcher,
            (element) => {
                if (element) {
                    element.addEventListener(action, events);
                }
            }
        );
    }
    /*els(target = document.body, matcher, action, events) {
        this.domObserver.observe(
            target,
            matcher,
            (element) => {
                if (element) {
                    element.addEventListener(action, events);
                }
            }
        );
    }*/

    

}