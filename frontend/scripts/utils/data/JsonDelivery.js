export class JsonDelivery {

    /**
     * 
     * @param {*} storage -> localstorage or sessionstorage
     */
    constructor(storage) {
        this.storage = storage;
    }
    /**
     * 
     * @param {string} url -> url to json file
     *  
     * @returns -> json as a prototype 
     */
    async deliver(url) {

        const { Storage } = await import("./storage/Storage.js");
        const s = new Storage(this.storage);

        if((s.existsItem(url))) {
            const { JsonObjectConvert } = await import("./convert/JsonObjectConvert.js");
            return new JsonObjectConvert().convert(s.getItem(url));
        } else {
            const { Fetching } = await import("./Fetching.js");
            const fetchData = await new Fetching(Response.prototype.json).fetch(url);
            s.setItem(url, fetchData);

            return fetchData;
        }

    }
}