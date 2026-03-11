export class JsonDelivery {
    constructor(storage) {
        this.storage = storage;
    }

    async deliver(url) {
        const { Storage } = await import("./../storage/Storage.js");
        const s = new Storage(this.storage);

        if (s.existsItem(url)) {
            return JSON.parse(s.getItem(url));
        } else {
            const { Fetching } = await import("./../Fetching.js");
            const fetchData = await new Fetching(Response.prototype.json).fetch(url);

            s.setItem(url, JSON.stringify(fetchData));
            return fetchData;
        }
    }
}