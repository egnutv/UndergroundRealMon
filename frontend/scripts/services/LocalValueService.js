import { Fetching } from "../utils/data/Fetching.js";
import { Storage } from "../utils/data/storage/Storage.js";

export class LocalValueService {

    /**
     * 
     * @param {*} storage - 
     *  
     */
    constructor(localValuesMethod = new Storage(sessionStorage)) {
        this.localValuesMethod = localValuesMethod;
        console.log("LocalValueService loaded");

    }

    async #f(url) {
        const fetching = new Fetching();
        return await fetching.json(url);
    }

}