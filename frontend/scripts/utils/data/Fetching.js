export class Fetching {
    constructor(parser) {
        this.parser = parser;
    }

    setParser(parser) {
        this.parser = parser;
    }

    async fetch(url) {
        const response = await fetch(url);

        if (!response.ok) {
            const body = await response.text().catch(() => "");
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}\n${body.slice(0, 200)}`);
        }

        return await this.parser.call(response);
    }
}