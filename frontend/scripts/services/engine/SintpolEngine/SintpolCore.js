export class SintpolCore {
    constructor(name = "sintpol-engine") {
        this.name = name;
        this.rulesStructure = "$property$: $size$$unit$; ";
    }

    async buildCssRules(content) {
        let rules = "";
        const rulesStructure = this.rulesStructure;

        for (let y = 0; y < content.length; y++) {
            const element = content[y];
            let size = (await this.#createSize(element.source, element.points)).toString();
            rules += rulesStructure.replace("$property$", element.property).replace("$size$", size).replace("$unit$", element.unit);
        }

        return rules;
    }

    async buildStyle(jsonFileContent, callback) {
    let j = await jsonFileContent;

    console.log("buildStyle input - typeof:", typeof j, "| value:", j);

    if (typeof j === "string") {
        try {
            j = JSON.parse(j);
        } catch (e) {
            console.error("buildStyle: invalid JSON input:", j, e);
            return "";
        }
    }

    if (typeof j !== "object" || j === null) {
        console.error("buildStyle: expected object or JSON string but got:", j);
        return "";
    }

    const domObjects = Object.keys(j).filter(k => k !== "_comment");
    let styleString = "";

    for (let index = 0; index < domObjects.length; index++) {
        const domObject = domObjects[index];
        const content = j[domObject];
        styleString = await callback(styleString, domObject, content);
    }

    return styleString;
}
    async #createSize(source, points) {
        const { TwoPointInterpolation } = await import("./../../../utils/calc/TwoPointInterpolation.js");

        if (typeof source === "string") {
            try {
                source = Function(`return ${source}`)();
            } catch (e) {
                console.warn(`Could not evaluate source string: ${source}`, e);
                source = 0;
            }
        }

        points = points.map(([w, v]) => [Number(w), Number(v)]);

        if (!points || points.length === 0) return 0;
        if (points.length === 1) return points[0][1];

        if (source <= points[0][0]) return points[0][1];
        if (source >= points[points.length - 1][0]) return points[points.length - 1][1];

        for (let i = 0; i < points.length - 1; i++) {
            const [startWidth, startValue] = points[i];
            const [endWidth, endValue] = points[i + 1];

            if (source >= startWidth && source <= endWidth) {
                const tpi = new TwoPointInterpolation(startValue, endValue, startWidth, endWidth, source);
                return tpi.calc();
            }
        }

        return 0;
    }
}