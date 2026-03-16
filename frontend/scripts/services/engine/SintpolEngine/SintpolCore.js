export class SintpolCore {
    constructor(name = "SintpolEngine") {
        this.name = name;
        this.rulesStructure = "$property$: $size$$unit$; ";
    }

    /**
     * @param {*} content is a js-object from a json
     * @returns not formated css
     */
    buildCssRules(content) {
        let rules = "";
        const rulesStructure = this.rulesStructure;

        for (let y = 0; y < content.length; y++) {
            const element = content[y];
            const size = 10;
            this.#createSize(element.source, element.points);
            rules += rulesStructure.replace("$property$", element.property).replace("$size$", size).replace("$unit$", element.unit);
            //rules += `${element.property}: ${size}${element.unit}; `;
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

    #createSize(source, points) {
        console.log(source);
        console.log(points);
        //TODO: Add logic
    }
}