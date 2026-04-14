

export class TextCore {
    constructor(name = 'textEngine') {
        this.sysLib = window.sysLib;
        this.name = name;
        this.trimmer = ":";
        this.indexPath = this.sysLib.configs.engine.langPaths;
        this.specificLangParameter = "$lang$";

        this.pO = "p"; // stringPath Operator - ths is a direction for the path 
        this.sO = "s"; // string operator - this is a direction for a value to set.
        this.proO = "protected"; // this is a protector for the global setting of values.



    }
    async init () {
        this.Parsing = new (await this.sysLib.utils.data.convert.Parsing()).Parsing();
        this.FileDelivery = new (await this.sysLib.utils.data.cache.FileDelivery()).FileDelivery(sessionStorage);
    }

    async buildText(key, replacement) {
        let text = await this.deliverText(key);
        const matches = text.match(/\$(.*?)§/g);
        if (!Array.isArray(matches)) {
            return text;
        }
        if (text.includes(startsWith(this.pO + this.trimmer))) {
            for (const match of matches) {
                
            }
        }
    }


    async deliverText(key) {
        //case 1: p:global:game_name -> return the string after researching the path
        //case 2: s:customValue -> return customValue Name in a array in callback. if the values defined, then returns the string.
        // -> finished: case 3: protected: not allowed to changes the value and return nothing.
        await this.init();


        
        let operator = "";

        let keyValues = key.split(this.trimmer);

        if (keyValues.length > 3 || keyValues.length === 0 ) {
            this.#invalKey(key);
        }
        //p:global:game_name
        //s:customValue
        
        switch (key) {
            case key.startsWith(this.proO + this.trimmer):
                console.warn(`The key ${key} is protected and cannot be used to set values.`);
                return;
                break;
            case key.startsWith(this.sO + this.trimmer):
                return key.split(this.trimmer)[1];
                break;
            case key.startsWith(this.pO + this.trimmer):
                const [pO, index, k] = key.split(this.trimmer);
                const indexFile = await  this.FileDelivery.deliver(this.indexPath);
                const indexData = this.Parsing.json(indexFile);
                let path = indexData[index].p;
                const lang = await this.#getLang();
                if (path.includes(this.specificLangParameter)) {
                    path = path.replace(this.specificLangParameter, lang);
                }
                const textFile = await this.FileDelivery.deliver(path);
                const parsed = this.Parsing.yaml(textFile);
                const value = k.split(".").reduce((obj, key) => obj?.[key], parsed);
                
                return value;
                break;
        
            default:
                this.#invalKey(key);
        }

    }

    #invalKey (key) {
        throw new error(`Invalid key format: ${key}`);
    }
    async #getLang() {
        let lang = document.getElementsByTagName("html")[0].getAttribute("lang");
        return lang;
    }
}