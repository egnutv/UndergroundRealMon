import React, { Component } from 'react';
import { useState } from 'react';

import Start from './../components/sites/Start.jsx';
import Loading from"../components/sites/Loading.jsx";
import SimpleGradient from "../components/elements/Backgrounds/SimpleGradient.jsx";
import Wildlife from "../components/elements/Backgrounds/Wildlife.jsx";
import Debug from '../components/sites/Debug.jsx';



export default function App() {
    const [screen, setScreen] = useState("start");
    const [background, setBackground] = useState("wildlife");
    return (
        
    <div className="App bg-center" style={{height: "100%", width: "100%"}}>
        <background style={{background: "yellow", position: "absolute", top: "0", left: "0", height: "100%", width: "100%"}}>
            {background === "default" && <SimpleGradient gradient={"var(--night-gradient)"}></SimpleGradient>}
            {background === "wildlife" && <Wildlife />}

        </background>
        <ui>
            {screen === "loading" && <Loading />}
            {screen === "start" && <Start />}
            {screen === "debug" && <Debug />}
        </ui>
        
    </div>

    );
}

