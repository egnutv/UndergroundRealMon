export class Import {
    constructor() {
    }
    async fetch(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
            }
            return await response.text();
        } catch (error) {
            console.error("fetching:", error);
        }
    }
}