import React, { Component } from 'react';
import { useState } from 'react';

import Start from './../components/sites/Start.jsx';
import Loading from"../components/sites/Loading.jsx";
import SimpleGradient from "../components/elements/Backgrounds/SimpleGradient.jsx";




export default function App() {
    const [screen, setScreen] = useState("start");
    return (
    <div className="App bg-center" style={{height: "100%", width: "100%"}}>
        {screen === "loading" && <Loading />}
        {screen === "start" && <Start />}
        

    </div>);
}

