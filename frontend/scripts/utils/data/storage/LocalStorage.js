import { SessionStorage } from "./SessionStorage.js";

export class LocalStorage extends SessionStorage {
    constructor() {
        super();
        this.storage = localStorage;
    }

}