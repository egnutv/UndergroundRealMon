import { LangCore } from "./LangCore.js";
import { DomObserver } from "../../observer/DomObserver.js";
import { FileDelivery } from "../../../utils/data/cache/FileDelivery.js";
import { Parsing } from "../../../utils/data/convert/Parsing.js";

export class LangGlobalEngine extends LangCore {
    constructor(name = "lang-engine") {
        super(name);
    }
    async start() {
        await this.init();
        await this.#applyingText();
    }
    async init() {
        await super.init();
        this.DomObserver = new (await this.sysLib.services.observer.DomObserver()).DomObserver();
    }



    

    async #applyingText() {
        const domObserver = this.DomObserver;

        domObserver.observe(
            document.body,
            el => el.getAttribute(this.name) !== null,
            async (el, controls) => {
                const key = el.getAttribute(this.name);

                console.log(key);
                const text = await this.deliverEntryText(key);
                el.textContent = text;
            }
        )
    }
}