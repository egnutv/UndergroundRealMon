import { srcEngine } from  "./../../srcPaths.js"

export class SintpolEngine {
    constructor() {

    }

    async start() {
        const { TwoPointInterpolation } = await import("./../../utils/calc/TwoPointInterpolation.js");
        const tpi = new TwoPointInterpolation();
        console.log(srcEngine.Sintpol);
        await this.execute();

        
    }
    async execute() {
        await this.#createHeadCSSByConf();
    }
    async #createHeadCSSByConf() {
        const {JsonDelivery} = await import("./../../utils/data/JsonDelivery.js");
        const j = await new JsonDelivery(sessionStorage).deliver(srcEngine.Sintpol);
        console.log(j);
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