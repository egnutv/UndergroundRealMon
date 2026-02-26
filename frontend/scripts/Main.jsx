
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./../styles/root.css";

import {FunctionTestScript} from "./FunctionTestScript.js";

export class Main {
    constructor() {

    }

    async start() {

        const functionTestScript = new FunctionTestScript();
        functionTestScript.run();

        console.log("starting game");

        const element = <App></App>;

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(element);

        const htmlDoc = document.getElementsByTagName("html");
        document.documentElement.lang = "de";

    
    }

        loadConfig() {

    }
}