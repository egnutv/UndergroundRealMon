import React from "react";
import ReactDOM from "react-dom/client";
//import * as PIXI from "pixi.js";
import { Main } from "./frontend/scripts/main.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div id="ui">UI läuft</div>
    </React.StrictMode>
);

//const main = new Main({ PIXI, mountId: "game" });

const main = new Main;
main.start();