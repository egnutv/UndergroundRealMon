
export class TwoPointInterpolation {

    /**
     * 
     * @param {number} initValue - this is the value to began a interpolation
     * 
     * @param {number} finalValue - this is the final num to interpolation
     * 
     * @param {number} initWidth - in px: the init width of innerScreen
     * 
     * @param {number} finalWidth - in px: the final width of innerScreen
     * 
     * @param {number} currentWidth by default the window.innerScreen
     * 
     */

    constructor(
        initValue = 90, 
        finalValue = 70, 
        initWidth = 1000, 
        finalWidth = 3000,
        currentWidth = window.innerWidth) 
    {
        this.initValue = initValue;
        this.finalValue = finalValue;
        this.initWidth = initWidth;
        this.finalWidth = finalWidth;
        this.currentWidth = currentWidth;
    }

    /**
     * 
     * @param {number} initValue - this is the value to began a interpolation
     * 
     * @param {number} finalValue - this is the final num to interpolation
     * 
     * @param {number} initWidth - in px: the init width of innerScreen
     * 
     * @param {number} finalWidth - in px: the final width of innerScreen
     * 
     * @param {number} currentWidth by default the window.innerScreenNum
     * 
     */

    
    calc(
        initValue = this.initValue, 
        finalValue = this.finalValue, 
        initWidth = this.initWidth, 
        finalWidth = this.finalWidth,
        currentWidth = this.currentWidth)
    {
        this.#validate(initValue, finalValue, initWidth, finalWidth, currentWidth);

        if(initValue === finalValue || currentWidth <= initWidth) {
            return initValue;
        }
        if(currentWidth >= finalWidth) {
            return finalValue;
        }

        //Interpolation:
        const difference = finalValue - initValue;
        const ratio = (currentWidth - initWidth) / (finalWidth - initWidth);
        const value = (difference * ratio);

        return value + initValue;
    }


    #validate(initValue, finalValue, initWidth, finalWidth, currentWidth) {
        const array = [initValue, finalValue, initWidth, finalWidth, currentWidth];
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] !== 'number' || Number.isNaN(array[i])) {
                throw new Error(`This value is not a number: ${array[i]}`);
            }
        }
        if (finalWidth === initWidth) {
            throw new Error(
                `That's not possible because the initWidth: ${initWidth} and the finalWidth: ${finalWidth} are the same`
            );
        }
    }
    test() {
        console.log(this.calc());
    }


}