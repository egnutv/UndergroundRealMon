import { srcEngine } from "./../../../srcPaths.js";


export class SintpolHeadEngine {
    constructor(idName = "SintpolEngine") {
        this.idName = idName;
    }

    async start() {
    const headStyles = this.#initialize();
    const { CSSFormatter } = await import("./../../../utils/data/formatter/CSSFormatter.js");
    const cssFormatter = new CSSFormatter();
    
    headStyles.textContent = await this.#buildStyleContent();
    console.log(await this.#buildStyleContent())
    }

    #initialize() {
        const idName = this.idName;
        let headStyle = document.getElementById(idName);

        if (!headStyle) {
            headStyle = document.createElement("style");
            headStyle.id = idName;
            document.head.appendChild(headStyle);
        }

        return headStyle;
    }

    async #buildStyleContent() {
        const { JsonDelivery } = await import("./../../../utils/data/cache/JsonDelivery.js");
        const j = await new JsonDelivery(sessionStorage).deliver(srcEngine.Sintpol);
        const { CSSFormatter } = await import("./../../../utils/data/formatter/CSSFormatter.js");
        const cssFormatter = new CSSFormatter();

        const domClasses = Object.keys(j).filter(k => k !== "_comment");

        let styleString = [];

        for (let index = 0; index < domClasses.length; index++) {
            const domClass = domClasses[index];
            const content = j[domClass];

            let ruleBody = "";

            for (let y = 0; y < content.length; y++) {
                const element = content[y];
                
                const size = 10;

                ruleBody += `${element.property}: ${size}${element.unit}; `;
            }
            styleString += cssFormatter.format(domClass, ruleBody)
        }

        return styleString;
    }




}