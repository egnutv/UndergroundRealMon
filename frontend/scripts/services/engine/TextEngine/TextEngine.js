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
    }
    async startTextGlobalEngine() {
        const  { TextGlobalEngine } = await import("./TextGlobalEngine.js");
        const tD = new TextGlobalEngine(this.name);
        await tD.start();
    }
}