export class Fetching {

    /**
     * 
     * @param {string} url 
     * @returns {Promise<string>} a promise that resolves to the text content of the response
     * 
     */
    async text(url) {
        return await this.fetching(url, async (response) => {
        return await response.text();
        });
    }

    /**
     * 
     * @param {string} url 
     * @returns {Promise<any>} a promise that resolves to the parsed JSON content of the response
     * 
     */
    async json(url) {
    return await this.fetching(url, async (response) => {
        const raw = await response.text(); 
        return JSON.parse(raw);
    });
}

    /**
     * 
     * @param {string} url 
     * @param {function(Response): Promise<any>} callback 
     * @returns {Promise<any>} a promise that resolves to the result of the callback
     * 
     */
    async fetching(url, callback) {
        try {
        const response = await fetch(url);

        if (!response.ok) {
            const body = await response.text().catch(() => "");
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}\n${body.slice(0, 200)}`);
        }

        return await callback(response);
        } catch (error) {
        console.error("fetching:", error);
        throw error;
        }
    }
    }