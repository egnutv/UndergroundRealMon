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
    }

    async testFetch() {
        const fetching = new Fetching();
        return await fetching.json("/frontend/configs/config.json");
    }
}