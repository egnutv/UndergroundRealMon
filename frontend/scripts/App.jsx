import React, { Component } from 'react';
import { useState } from 'react';

import Start from './../components/sites/Start.jsx';
import Loading from"../components/sites/Loading.jsx";




export default function App() {
    const [screen, setScreen] = useState("loading");
    return (
    <div className="App bg-center" style={{height: "100%", width: "100%"}}>
        {screen === "loading" && <Loading />}
        {screen === "start" && <Start />}

    </div>);
}

