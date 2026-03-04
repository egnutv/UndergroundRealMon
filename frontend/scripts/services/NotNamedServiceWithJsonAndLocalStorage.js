import { Fetching } from "../utils/data/Fetching.js";
import { LocalStorage } from "../utils/data/storage/LocalStorage.js";

export class NotNamedServiceWithJsonAndLocalStorage {

    constructor() {
        
        console.log("NotNamedServiceWithJsonAndLocalStorage loaded");
    }

    async #f(url) {
        const fetching = new Fetching();
        return await fetching.json(url);
    }

}