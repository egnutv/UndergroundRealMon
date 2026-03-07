export class Storage {
    /**
     * 
     * @param {*} storage - the storage object to use (e.g., sessionStorage, localStorage)
     * 
     */

    constructor(storage) {
        this.storage = storage;
    }

    changeStorage(storage) {
        this.storage = storage;
    }


    /**
     * Sets a value in the storage with the specified key.
     * @param {*} key - the key under which the value will be stored
     * @param {*} value - the value to be stored
     */
    set(key, value) {
        try {
            this.storage.setItem(key, value);
        } catch (error) {
            console.error("Failed to set session storage item:", error);
        }
    }

    /**
     * Gets a value from the storage with the specified key.
     * @param {*} key - The key under which the value is stored.
     * @returns - returns a value.
     */
    get(key) {
        const item = this.storage.getItem(key);
        if (item !== null) {
            try {
                return (item);
            } catch (error) {
                console.warn(`Error parsing item ${key} from Storage:`, error);
                return item;
            }
        }
        throw new Error(`Could not find a value with key: ${key}`);
    }

    /**
     * Removes a value from the storage with the specified key.
     * @param {*} key - The key under which the value is stored.
     */
    remove(key) {
        this.storage.removeItem(key);
    }
    /**
     * Checks if a value exists in the storage with the specified key.
     * @param {*} key - The key to check for existence.
     * @returns {boolean} - True if the value exists, false otherwise.
     */

    exists(key) {
        return this.storage.getItem(key) !== null;
    }

    /**
     * Clears all values from the storage.
     */
    clear() {
        this.storage.clear();
    }
}