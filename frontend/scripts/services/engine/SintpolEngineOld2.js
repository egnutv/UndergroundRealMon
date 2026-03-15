import { srcEngine } from  "./../../srcPaths.js"

export class SintpolEngine {


    constructor(idName = "SintpolEngine") {
        this.idName = idName;
    }

    async start() {
        const { TwoPointInterpolation } = await import("./../../utils/calc/TwoPointInterpolation.js");
        const tpi = new TwoPointInterpolation();
        console.log(srcEngine.Sintpol);
        await this.execute();

        
    }
    async execute() {
       // await this.#createHeadCSSByConf();
    this.#startHead();
    }

    async #startHead() {

        this.#createHead();
        const content = await this.#cookingHeadContent();
        let id = this.idName;
        let head = document.getElementById(id);

        console.log(typeof content)
        head.innerHTML = content;

    }

    async #cookingHeadContent() {
        const { JsonDelivery } = await import("./../../utils/data/JsonDelivery.js");
        const j = await new JsonDelivery(sessionStorage).deliver(srcEngine.Sintpol);

        const domClasses = Object.keys(j).filter(k => k !== "_comment");

        let styleString = "";

        for (let index = 0; index < domClasses.length; index++) {
            const domClass = domClasses[index];
            const content = j[domClass];

            let ruleBody = "";

            for (let y = 0; y < content.length; y++) {
                const element = content[y];
                
                const size = 10;

                ruleBody += `${element.property}: ${size}${element.unit}; `;
            }

            styleString += `.${domClass} { ${ruleBody}}`;
        }

        return styleString;
    }

    #createHead() {
        let id = this.idName;
        let head = document.getElementById(id);
        if (head == null) {
            head = document.createElement("style");
            head.id = id;
            document.head.appendChild(head);
            //console.log(headStyle)
        } 
            return head;

        
    }

    async #triggerByDataSet() {
        const { DomObserver } = await import("./../observer/DomObserver.js");
        new DomObserver.observe(
            document.body,
                el => el.dataset.sintpol !== undefined,
                (el, controls) => {

                }
        )
    }

    #pointer(numArray) {

    }
}
