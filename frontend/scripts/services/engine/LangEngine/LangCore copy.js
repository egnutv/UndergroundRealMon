import { DomObserver } from "../../observer/DomObserver.js";
import { FileDelivery } from "../../../utils/data/cache/FileDelivery.js";
import { Parsing } from "../../../utils/data/convert/Parsing.js";
import { srcEngine } from "../../../srcPaths.js";
import { srcConfig } from "../../../srcPaths.js";

import { UndergroundRealMon } from "../../../UndergroundRealMon.js";
export class LangCore {
    constructor(name = 'langEngine') {
        this.name = name;
        this.trimmer = ":"
        this.indexPath = srcEngine.langPaths;
        this.specificPathParameter = "$lang$";
        
        this.DomObserver = new DomObserver;
        this.FileDelivery = new FileDelivery(sessionStorage);
        this.Parsing = new Parsing;
    }

    applyString() {
        
    }
    async deliverText(key) {
        
    }
    async deliverEntryText(rawKey) {
        const indexFile = await this.FileDelivery.deliver(this.indexPath);
        console.log(indexFile);
        const [indexKey, langKey] = rawKey.split(this.trimmer);
        //let path = indexFile[indexKey].p;
        const index = this.Parsing.json(indexFile);
        let path = index[indexKey];
        console.log(path);

        const lang = await this.#getLang();
        if (path.includes(this.specificPathParameter)) {
            path = path.replace(this.specificPathParameter, lang);
        }
        console.log(path);

        const textFile = await this.FileDelivery.deliver(path);
        console.log(textFile);
        const parsed = this.Parsing.yaml(textFile);

        const text = langKey
            .split(".")
            .reduce((obj, key) => obj?.[key], parsed);

        console.log(text);
        
        return text;
        
    }
    

    async #getLang() {
        let lang = document.getElementsByTagName("html")[0].getAttribute("lang");
        return lang;
    }
}