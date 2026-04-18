import { TextCore } from "./TextCore.js";
import { srcEngine } from "./../../../srcPaths.js";
import { Events } from "./../../../Events.js";

export class TextEngine {
    constructor(name = "lang-engine") {
        this.core = new TextCore();
        this.name = name;
        this.events = new Events();
    }
    async start() {
        await this.startTextGlobalEngine();
        await this.startTextDeliveryEngine();
    }
    async deliver(key, replacements) {
        const  { TextGlobalEngine } = await import("./TextGlobalEngine.js");
        return await TextGlobalEngine.build(key, replacements);
    }
    async startTextGlobalEngine() {
        const  { TextGlobalEngine } = await import("./TextGlobalEngine.js");
        const tG = new TextGlobalEngine(this.name);
        await tG.start();
    }
    async startTextDeliveryEngine() {
        /*const  { TextDeliveryEngine } = await import("./TextDeliveryEngine.js");
        const tD = new TextDeliveryEngine(this.name);
        await tD.start();*/
    }
}