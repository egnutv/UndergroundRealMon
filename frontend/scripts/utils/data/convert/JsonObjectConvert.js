class JsonObjectConvert {

    /**
     * 
     * @param {string | object} input 
     * if...
     * - json-string converts to object
     * - object converts to json-string 
     * @returns 
     */
    convert(input) {
        if (typeof input === 'string') {
            try {
                return JSON.parse(input);
            } catch (e) {
                throw new Error(e);
            }
        } else if (typeof input === 'object' && input !== null) {
            try {
                return JSON.stringify(input);
            } catch (e) {
                throw new Error(e);
            }
        } else {
            throw new Error("is not a object or JSON");
        }
    }
}
export { JsonObjectConvert }
