import { DomObserver } from "../observer/DomObserver.js";

export class SintpolEngine {
    constructor() {
        this.domObserver = new DomObserver();
    }

    async start() {
        const { TwoPointInterpolation } = await import("./../../utils/calc/TwoPointInterpolation.js");
        const tpi = new TwoPointInterpolation();

        this.domObserver.observe(
            document.body,
            el => el.dataset.sintpol !== undefined,
            (el, controls) => {
                const data = el.dataset.sintpol.split(",");
                console.log(data);


                if(!(data.length >= 5 && ((data.length - 1) % 2 === 0))) {
                    throw new Error(`${data.length} is not a valid length`);
                }

                const confData = this.#createInterInput(data);
                console.log(confData);

                let tpinum;

                if (confData.length === 5) {
                    tpinum = tpi.calc(...confData);
                    
                }
                if (confData.length > 5) {
                    let datapre1 = [];
                    let datapre2 = [];

                    for (let index = 0; index < confData.length; index++) {
                        const dataElement = confData[index];
                        
                    }
                }
                el.style.width = `${tpinum}%`;

                /*TODO: 
                    Add a logic for a size for a length of 7
                    Add a read logic to search out the unit of measurement
                */
            }
        );
    }
    #createBetweenInterpol(data) {

    }

    #createInterInput(data) {
        const confData = [];

        for (let index = 0; index < data.length; index++) {
            let dataElement = data[index].trim();

            switch (typeof dataElement) {
                case "number":
                    confData.push(dataElement);
                    break;

                case "string":
                    if (index !== data.length - 1) {
                        dataElement = Number(dataElement.replace(/[^0-9.]/g, ""));
                        confData.push(dataElement);
                    } else {
                        if (dataElement === "window.innerWidth" || dataElement === "window.innerHeight") {
                            confData.push(window.innerWidth);
                        } else {
                            confData.push(dataElement);
                        }
                    }
                    break;

                default:
                    throw new Error(`${dataElement} is not a number or a valid dimension`);
            }
        }

        return confData;
    }
}