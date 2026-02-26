export class FunctionTestScript {
    constructor() {
        console.log("FunctionTestScript loaded");
    }

    run() {
        console.log("FunctionTestScript run");
        this.testFunction();}


    testFunction() {
        console.log("testFunction called");
    }
}