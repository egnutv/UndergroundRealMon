

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
        console.log(key);
        let text = await this.deliverText(key);
        let matches = null;
        console.log(text);
        matches = (text ?? "").match(/\$(.*?)\$/g);
        if (!Array.isArray(matches)) {
            if (replacement !== undefined) {
                return replacement;
            }
            return text;
        }
        console.log(matches);
        if (text.includes((this.pO + this.trimmer))) {
            for (const match of matches) {

                const t = await this.deliverText((match.remove("$")));
                text = text.replace(match, t);
            }
            return text;
        }
        //return null;
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
        //return "X";
        let value = null;
        const instruction = keyValues[0];
        switch (instruction) {
            case this.proO:
                console.warn(`The key ${key} is protected and cannot be used to set values.`);
                return;
            case this.sO:
                return keyValues[1];
            case this.pO:
                const [pO, index, k] = keyValues;
                console.log(index);
                console.log(k);
                const indexFile = await  this.FileDelivery.deliver(this.indexPath);
                console.log(indexFile);
                const indexData = this.Parsing.json(indexFile);
                console.log(indexData);
                let p = indexData[index];
                console.log(p);
                if (p.includes(this.specificLangParameter)) {
                    const lang = await this.#getLang();
                    p = p.replace(this.specificLangParameter, lang);
                }
                console.log(p);
                const textFile = await this.FileDelivery.deliver(p);
                console.log(textFile);
                const parsed = this.Parsing.yaml(textFile);
                console.log(parsed);
                value = k.split(".").reduce((obj, key) => obj?.[key], parsed);
                console.log(value);
                return value;
                break;
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