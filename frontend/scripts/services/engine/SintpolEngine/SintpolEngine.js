import { srcEngine } from "./../../../srcPaths.js";



export class SintpolEngine {
    constructor(name = "sintpol-engine") {
        this.name = name;
    }

    async start() {
        await this.startHeadEngine();
        await this.startInlineEngine();
    }
    async startHeadEngine() {
        
        const { SintpolHeadEngine } = await import("./SintpolHeadEngine.js");
        const sintpolHeadEngine = new SintpolHeadEngine(this.name);
        sintpolHeadEngine.start();
    }
    async startInlineEngine() {
        const { SintpolInlineEngine } = await import("./SintpolInlineEngine.js");
        const sintpolInlineEngine = new SintpolInlineEngine(this.name);
        sintpolInlineEngine.start();
    }


}