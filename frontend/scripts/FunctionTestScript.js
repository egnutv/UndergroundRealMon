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
    }

    async testFetch() {
        const fetching = new Fetching();
        return await fetching.json("/frontend/configs/config.json");
    }

    async save(url, storage) {
        const fetching = new Fetching();
        const storage = new Storage(storage);

        if (storage.exists(url)) {
            console.log(`Key "${url}" already exists in storage. Skipping fetch.`);
        } else {
            const data = await fetching.json(url);
            console.log(`Data for "${url}" fetched:`, data);
            await storage.set(url, data);
        }
        
    }
    async load(url, storage) {
        const storage = new Storage(storage);

        if (storage.exists(url)) {
            const data = await storage.get(url);
            console.log(`Data for "${url}" loaded from storage:`, data);
        } else {
            console.log(`Key "${url}" does not exist in storage.`);
        }
    }
    async remove(url, storage) {
        const storage = new Storage(storage);
        if (storage.exists(url)) {
            await storage.remove(url);
            console.log(`Key "${url}" removed from storage.`);
        } else {
            console.log(`Key "${url}" does not exist in storage. Cannot remove.`);
        }
    }
    async exists(url, storage) {
        const storage = new Storage(storage);
        const exists = storage.exists(url);
        console.log(`Key "${url}" exists in storage:`, exists);
    }
    async clear(storage) {
        const storage = new Storage(storage);
        await storage.clear();
        console.log("Storage cleared.");
    }

}