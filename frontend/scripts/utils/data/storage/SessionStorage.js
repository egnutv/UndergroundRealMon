export class SessionStorage {
    constructor() {
        this.storage = sessionStorage;
    }

    set(keyPath, value) {
        try {
            this.storage.setItem(keyPath, value);
        } catch (error) {
            console.error("Failed to set session storage item:", error);
        }
    }

    get(keyPath) {
        const item = this.storage.getItem(keyPath);
        if (item !== null) {
            try {
                return (item);
            } catch (error) {
                console.warn(`Error parsing item ${keyPath} from Storage:`, error);
                return item;
            }
        }
        throw new Error(`Could not find a value with keyPath: ${keyPath}`);
    }
    remove(keyPath) {
        this.storage.removeItem(keyPath);
    }

    exists(keyPath) {
        return this.storage.getItem(keyPath) !== null;
    }

    clear() {
        this.storage.clear();
    }
}