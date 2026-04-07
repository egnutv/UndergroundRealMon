class StringEngine {
    constructor() {
        this.core = new StringCore();
    }

    setValue(value) {
        this.core.setValue(value);
    }

    getValue() {
        return this.core.getValue();
    }
}