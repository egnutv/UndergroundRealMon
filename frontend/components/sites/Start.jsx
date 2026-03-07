import React, { Component } from 'react';

import Button from "../elements/Buttons/Button.jsx";
import IconButton from "../elements/Buttons/IconButton.jsx";
import SimpleGradient from "../elements/Backgrounds/SimpleGradient.jsx";

export default function Start() {

    return (
        <div className="start-screen">
            <h1>
                Willkommen zu Underground RealMon
            </h1>

            <div className="container" style={{display: "flex", flexDirection: "column", gap: "1rem", width: "50%"}}>

                <Button>
                    Starten
                </Button>

            </div>
        </div>
    );
}
