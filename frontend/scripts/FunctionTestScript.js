import { Fetching } from "./utils/data/Fetching.js";
import { Storage } from "./utils/data/storage/Storage.js";

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

        this.testStorage(sessionStorage);
        this.testStorage(localStorage);
    }

    async testFetch() {
        const fetching = new Fetching();
        return await fetching.json("/frontend/configs/config.json");
    }

    testStorage(storage) {
        const s = new Storage(storage);
        s.set("testKey", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        const value = s.get("testKey");
        console.log("storage - testKey:", value);
        s.clear("testKey");
    }

}