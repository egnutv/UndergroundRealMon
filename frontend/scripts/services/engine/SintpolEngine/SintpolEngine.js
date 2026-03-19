import { srcEngine } from "./../../../srcPaths.js";
import { Events } from "./../../../Events.js";

export class SintpolEngine {
    constructor(name = "sintpol-engine") {
        this.name = name;
        this.events = new Events();
    }

    async start() {
    await this.startHeadEngine();
    await this.startInlineEngine();

    if (!this._resizeListenerAdded) {
        this._resizeListenerAdded = true;
        window.addEventListener('resize', async () => {
            await this.startHeadEngine();
            await this.startInlineEngine();
        });
    }
}

    async startHeadEngine() {
        const { SintpolHeadEngine } = await import("./SintpolHeadEngine.js");
        const sintpolHeadEngine = new SintpolHeadEngine(this.name);
        await sintpolHeadEngine.start();
    }

    async startInlineEngine() {
        const { SintpolInlineEngine } = await import("./SintpolInlineEngine.js");
        const sintpolInlineEngine = new SintpolInlineEngine(this.name);
        await sintpolInlineEngine.start();
    }
}