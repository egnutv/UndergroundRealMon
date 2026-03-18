import { srcEngine } from "./../../../srcPaths.js";
import { SintpolCore } from "./SintpolCore.js";

export class SintpolHeadEngine extends SintpolCore {
    //TODO: Add comments
    async start() {
        const headStyles = this.#initialize();

        const styleContent = await this.#buildStyleContent();
        headStyles.textContent = styleContent;
        console.log(styleContent);
    }

    #initialize() {
        const name = this.name;
        let headStyle = document.getElementById(name);

        if (!headStyle) {
            headStyle = document.createElement("style");
            headStyle.id = name;
            document.head.appendChild(headStyle);
        }

        return headStyle;
    }


    async #buildStyleContent() {
        const { FileDelivery } = await import("./../../../utils/data/cache/FileDelivery.js");
        let jsonFileContent = await new FileDelivery(sessionStorage).deliver(srcEngine.Sintpol);

        const { CSSFormatter } = await import("./../../../utils/data/formatter/CSSFormatter.js");
        const cssFormatter = new CSSFormatter();

        return await this.buildStyle(jsonFileContent, async (styleString, domObject, content) => {
            const ruleBody = await this.buildCssRules(content);
            return styleString + cssFormatter.format(domObject, ruleBody);
        });
    }
}