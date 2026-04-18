

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

    /*TODO: restructure the method.
        1. case pO: this have another key like $p:global:game_name$ 
            then this should be replaced with the value of p:global:game_name$:
            -> The method should then run through an infinite loop until all keys are correctly fitted.
        
        2. case sO: (includes s:customValue) then this should be replaced with the value of customValue.
            -> But in infinite loop then parameters should be noted in an array.
        3. case proO: then this should not be replaced and return the key.
    */

    async build(key, replacements) {
        let text = await this.deliverText(key);
        console.log(text);
        let matches = null;
        matches = (text ?? "").match(/\$(.*?)\$/g);
        if (String(matches) ) {
            matches = ["$" + matches + "$"];
        }
        let k = matches?.map(match => match.replaceAll("$", ""));
        console.log(k);
        console.log(await this.#loopPathText(text, replacements));
        const result = await this.#loopPathText(text, replacements);
        return result;

    }
    async #loopPathText(text, replacements) {
    let unresolved = [];
    let replacementIndex = 0;

    let prevText = null;

    while (text !== prevText) {
        prevText = text;

        let matches = text.match(/\$(.*?)\$/g);
        if (!matches) break;

        for (const match of matches) {
            const instruction = match.replaceAll("$", "");

            if (instruction.startsWith(this.proO + this.trimmer)) {
                continue;
            }

            if (instruction.startsWith(this.sO + this.trimmer)) {
                if (Array.isArray(replacements)) {
                    const value = replacements[replacementIndex++];
                    if (value !== undefined) {
                        text = text.replace(match, value);
                    }
                } else {
                    unresolved.push(instruction);
                }
                continue;
            }

            if (instruction.startsWith(this.pO + this.trimmer)) {
                const value = await this.deliverText(instruction);

                if (value !== undefined) {
                    text = text.replace(match, value);
                }
                continue;
            }
        }
    }

        return {
            text,
            unresolved
        };
    }
    


    async deliverText(key) {
        //case 1: p:global:game_name -> return the string after researching the path
        //case 2: s:customValue -> return customValue Name in a array in callback. if the values defined, then returns the string.
        //case 3: protected: not allowed to changes the value and return nothing.
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
                const indexFile = await  this.FileDelivery.deliver(this.indexPath);

                const indexData = this.Parsing.json(indexFile);

                let p = indexData[index];

                if (p.includes(this.specificLangParameter)) {
                    const lang = await this.#getLang();
                    p = p.replace(this.specificLangParameter, lang);
                }

                const textFile = await this.FileDelivery.deliver(p);

                const parsed = this.Parsing.yaml(textFile);

                value = k.split(".").reduce((obj, key) => obj?.[key], parsed);

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