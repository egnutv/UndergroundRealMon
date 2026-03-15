export class SintpolCore {
    constructor(name = "SintpolEngine") {
        this.name = name;
    }

    /**
     * @param {*} content is a js-object from a json
     * @returns not formated css
     */
    buildCssRules(content) {
        let rules = "";

        for (let y = 0; y < content.length; y++) {
            const element = content[y];
            const size = 10;

            rules += `${element.property}: ${size}${element.unit}; `;
        }

        return rules;
    }

    async buildStyle(jsonFileContent, callback) {
        let j = jsonFileContent;

        if (typeof j === "string") {
            j = JSON.parse(j);
        }

        const domObjects = Object.keys(j).filter(k => k !== "_comment");

        let styleString = "";

        for (let index = 0; index < domObjects.length; index++) {
            const domObject = domObjects[index];
            const content = j[domObject];

            styleString = callback(styleString, domObject, content);
        }

        return styleString;
    }
}