import { Fetching } from "./utils/data/Fetching.js";

export class FunctionTestScript {
    constructor() {
        console.log("FunctionTestScript loaded");
    }

    async run() {
        console.log("FunctionTestScript run");
        await this.testFunction();
    }

    async testFunction() {
        console.log("testFunction called");
        const input = await this.testFetch();
        console.log("config.json:", input);

        const lang = input.langs.default;
        const design_mode = input.design_mode.added;
        console.log("default language:", lang);
        console.log("design mode:", design_mode);
    }

    async testFetch() {
        const fetching = new Fetching();
        return await fetching.json("/frontend/configs/config.json");
    }
}