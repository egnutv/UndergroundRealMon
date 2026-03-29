import React, { Component } from 'react';

import Button from "../elements/Buttons/Button.jsx";
import IconButton from "../elements/Buttons/IconButton.jsx";
import SimpleGradient from "../elements/Backgrounds/SimpleGradient.jsx";

export default function Start() {

    return (
        <div className="start-screen">
            

            <div 
            className="container dyn-area bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ display: "flex", flexDirection: "column", gap: "1rem"}}>

                <h1>
                Underground RealMon
                </h1>
                <Button>
                    Starten
                </Button>
                <Button>
                    Einstellungen
                </Button>
                <Button>
                    Beenden
                </Button>

            </div>
        </div>
    );
}
