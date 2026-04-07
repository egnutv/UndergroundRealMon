import { warn } from "pixi.js";

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

    async buildText(key, callback) {
        //case 1: p:global:game_name -> return the string after researching the path
        //case 2: s:customValue -> return customValue Name in a array in callback. if the values defined, then returns the string.
        // -> finished: case 3: protected: not allowed to changes the value and return nothing.
        await this.init();

        if (key.startsWith(this.proO + this.trimmer)) {
            console.warn(`The key ${key} is protected and cannot be used to set values.`);
        }
        
        let operator = "";

        let keyValues = key.split(this.trimmer);

        if (keyValues.length > 2 || keyValues.length === 0 ) {
            this.#invalKey(key);
        }

        if (keyValues.length === 2 ) {
            if (!keyValues.includes(this.pO)) {
                this.#invalKey(key);
            }
            return;
        }

        /* ERROR: NOTE: FIX the case of the keyValues. If we have: 
        p:global:game_name, and we split by ":", we will have ["p", "global", "game_name"].
        BUT: this if statement only checks if the length is 1.
        This case is not perfect handeld.

        if (keyValues.length === 1) {
            if (!keyValues.includes(this.sO) || !keyValues.includes(this.pO)) {
                this.#invalKey(key);
            }

            //the keyValues has now: ["p"]
                if (keyValues.includes(this.pO)) {
                    keyValues = keyValues.remove(this.pO);


                }

                if (keyValues.includes(this.sO)) {
                    keyValues = keyValues.remove(this.sO);

                }
                
        }*/
        

        //const indexFile = await this.FileDelivery.deliver(this.indexPath);



    }

    #invalKey (key) {
        throw new error(`Invalid key format: ${key}`);
    }
}