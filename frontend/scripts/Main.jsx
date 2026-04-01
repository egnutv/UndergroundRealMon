
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./../styles/root.css";
import { sysLib } from "./sysLib.js";

import {FunctionDebugger} from "./FunctionDebugger.js";

export class Main {
    constructor() {

    }

    async start() {
        window.sysLib = sysLib;
        const functionTestScript = new FunctionDebugger();
        functionTestScript.start();

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