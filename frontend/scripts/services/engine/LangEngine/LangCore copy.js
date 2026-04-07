//import { UndergroundRealMon } from "../../../UndergroundRealMon.js";

//import { UndergroundRealMon } from "../../../UndergroundRealMon.js";


export class LangCore {
    constructor(name = 'langEngine') {
        this.sysLib = window.sysLib;
        this.name = name;
        this.trimmer = ":"
        this.indexPath = this.sysLib.configs.engine.langPaths;
        this.specificPathParameter = "$lang$";
    }

    applyString() {
        
    }
    
    async deliverText(key) {
        
    }
    async init () {
        this.Parsing = new (await this.sysLib.utils.data.convert.Parsing()).Parsing();
        this.FileDelivery = new (await this.sysLib.utils.data.cache.FileDelivery()).FileDelivery(sessionStorage);
    }
    async deliverEntryText(rawKey) {
        await this.init();

        const { Parsing } = await this.sysLib.utils.data.convert.Parsing();
        const parsing = new Parsing;

        const indexFile = await  this.FileDelivery.deliver(this.indexPath);
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