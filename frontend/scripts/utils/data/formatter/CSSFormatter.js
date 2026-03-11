export class CSSFormatter {
    constructor() {}

    /**
     * @param {string} name
     * @param {Array|string} content
     */
    format(name, content) {
        if (!Array.isArray(content) && typeof content !== "string") {
            throw new Error(`typeof ${name} is not an Array or string`);
        }

        let contentArr = [];
        if (typeof content === "string") {
            contentArr = [content];
        } else {
            contentArr = content;
        }

        const saveString = contentArr.join("\n    ");

        let output = `${name} {\n    %content%\n}`;
        //let output = `${name}{%content%}`;
        output = output.replace("%content%", saveString);

        return output;
    }
}