import { srcEngine } from "./../../../srcPaths.js";
import { Events } from "./../../../Events.js";
export class LangEngine {
    constructor(name = "lang-engine") {
        this.name = name;
        this.events = new Events();
    }
    async start() {
        await this.startDeliveryEngine();
    }

    async startDeliveryEngine() {
        const  { LangGlobalEngine } = await import("./LangGlobalEngine.js");
        const lD = new LangGlobalEngine(this.name);
        await lD.start();
    }
    
}