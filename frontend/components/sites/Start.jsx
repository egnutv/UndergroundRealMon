import React, { Component } from 'react';

import Button from "../elements/Buttons/Button.jsx";
import IconButton from "../elements/Buttons/IconButton.jsx";
import SimpleGradient from "../elements/Backgrounds/SimpleGradient.jsx";

export default function Start() {

    return (
        <div className="start-screen">
   
            
            <div 
            className="container dyn-area bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem", borderRadius: "1rem" }}>

                <h1 lang-engine='p:sites:start.title'  style={{color: "var(--primary-text-color"}}>
                Underground RealMon
                </h1>
                <Button className="start-button bg-[var(--primary-color)] hover:bg-[var(--tertiary-color)]">
                    <p lang-engine='p:general:start' style={{color: "var(--primary-text-color"}}>

                    </p >
                </Button >
                <Button className="settings-button bg-[var(--primary-color)] hover:bg-[var(--tertiary-color)]">
                    <p lang-engine='p:general:settings' style={{color: "var(--primary-text-color"}}>

                    </p >
                </Button>
                <Button className="exit-button bg-[var(--primary-color)] hover:bg-[var(--tertiary-color)]">
                    <p lang-engine='p:general:exit' style={{color: "var(--primary-text-color"}}>

                    </p >
                </Button>

            </div>
            <style>
                {`
                    .start-button:hover {
                        background: var(--tertiary-color);
                    }
                    .settings-button:hover {
                        background: var(--tertiary-color);
                    }
                    .exit-button:hover {
                        background: var(--tertiary-color);
                    }
                `}
            </style>
        
        </div>
        
    );
}
