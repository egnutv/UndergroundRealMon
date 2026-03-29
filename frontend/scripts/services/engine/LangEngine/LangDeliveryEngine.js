import { DomObserver } from "../../observer/DomObserver";
export class LangDeliveryEngine {
    constructor(name = "lang-engine") {
        this.name = name;


        this.DomObserver = new DomObserver;
    }
    async start() {
        
    }
}