import React, { Component } from 'react';
import { useState } from 'react';

import Start from './../components/sites/Start.jsx';
import Loading from"../components/sites/Loading.jsx";
import SimpleGradient from "../components/elements/Backgrounds/SimpleGradient.jsx";
import Wildlife from "../components/elements/Backgrounds/Wildlife.jsx";
import Debug from '../components/sites/Debug.jsx';
import Settings from '../components/sites/Settings.jsx';
//import site from './controller/SiteController.js';



export default function App() {
    const [screen, setScreen] = useState("settings");
    const [background, setBackground] = useState("wildlife");

    
    const site = (screenName) => {

        switch(screenName) {
            case "start":
                return {
                    screen: screenName,
                    background: "wildlife"
                };

            case "loading":
                return {
                    screen: screenName,
                    background: "default"
                };

            case "debug":
                return {
                    screen: screenName,
                    background: "default"
                };
            case "settings":
                return {
                    screen: screenName,
                    background: "wildlife"
                };

            default:
                return {
                    screen: "debug",
                    background: "wildlife"
                };
        }
    };
    const current = site(screen);
    return (
        
    <div className="App bg-center" style={{height: "100%", width: "100%"}}>
        <background style={{background: "yellow", position: "absolute", top: "0", left: "0", height: "100%", width: "100%"}}>
            {current.background === "default" && <SimpleGradient gradient={"var(--night-gradient)"}></SimpleGradient>}
            {current.background === "wildlife" && <Wildlife />}

        </background>
        <ui style={{position: "absolute", top: "0", left: "0", height: "100%", width: "100%"}}>
            {current.screen === "loading" && <Loading site={setScreen} />}
            {current.screen === "start" && <Start site={setScreen} />}
            {current.screen === "debug" && <Debug site={setScreen}/>}
            {current.screen === "settings" && <Settings site={setScreen} />}
        </ui>
        
    </div>

    );
}