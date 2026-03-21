import { srcEngine } from "./../../../srcPaths.js";
import { SintpolCore } from "./SintpolCore.js";

export class SintpolInlineEngine extends SintpolCore{
    //TODO: Add comments
    constructor() {
        super();
        this.rulesSeparator= "$$$$$"
        this.rulesStructure = `["$property$", "$size$$unit$"]${this.rulesSeparator}`;
    }
    async start() {
        await this.#applyingStyling();
    }
    async #buildStyling(rules) {

            let jsonFileContent = rules;
    
            return await this.buildStyle(jsonFileContent, async (styleString, domObject, content) => {
                const ruleBody = this.buildCssRules(content);
                return ruleBody;
            });
    }

    async #applyingStyling() {
    const { DomObserver } = await import("../../observer/DomObserver.js");
    const domObserver = new DomObserver();

    domObserver.observe(
        document.body,
        el => el.getAttribute(this.name) !== null,
        async (el, controls) => {
            const rules = el.getAttribute(this.name);
            let stylingRules = await this.#buildStyling(rules);

            stylingRules = stylingRules.slice(0, -this.rulesSeparator.length).split(this.rulesSeparator);

            for (let i = 0; i < stylingRules.length; i++) {
                let stylingRule = stylingRules[i];
                stylingRule = JSON.parse(stylingRule);
                el.style[stylingRule[0]] = stylingRule[1];
            }
            controls.disconnect();
        }
    )
}
}