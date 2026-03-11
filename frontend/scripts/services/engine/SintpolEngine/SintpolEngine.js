import { srcEngine } from "./../../../srcPaths.js";


export class SintpolEngine {
    constructor(idName = "SintpolEngine") {
        this.idName = idName;
    }

    async start() {
        await this.startHeadEngine();
    }
    async startHeadEngine() {
        
        const { SintpolHeadEngine } = await import("./SintpolHeadEngine.js");
        const sintpolHeadEngine = new SintpolHeadEngine(this.idName);
        sintpolHeadEngine.start();
    }


}