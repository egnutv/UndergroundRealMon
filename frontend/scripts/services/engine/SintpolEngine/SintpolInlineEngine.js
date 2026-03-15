import { srcEngine } from "./../../../srcPaths.js";
import { SintpolCore } from "./SintpolCore.js";

export class SintpolInlineEngine extends SintpolCore{
    //TODO: Add logic from old Engine inspired

    async start() {
        let demoRule = `
                {
                    "rules": [
                        {
                            "property": "width",
                            "source": "window.innerWidth",
                            "unit": "px",
                            "points": [
                                ["100", "100%"],
                                ["1000", "30%"]
                            ]
                        },
                        {
                            "property": "height",
                            "source": "window.innerHeight",
                            "unit": "px",
                            "points": [
                                ["500", "40"],
                                ["1200", "100"]
                            ]
                        }
                    ]
                }
            `
        console.log("Output: " + await this.#buildStyling(demoRule))
    }
    async #buildStyling(demoRules) {

            let jsonFileContent = demoRules;
    
            return await this.buildStyle(jsonFileContent, (styleString, domObject, content) => {
                const ruleBody = this.buildCssRules(content);
                return ruleBody;
            });
    }
}

 