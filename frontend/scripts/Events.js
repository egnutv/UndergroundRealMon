import { DomObserver } from "./services/observer/DomObserver.js";

export class Events {
    constructor() {
        this.domObserver = new DomObserver();
    }

}