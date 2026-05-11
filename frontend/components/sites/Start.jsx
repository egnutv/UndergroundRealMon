import React, { Component } from 'react';

import Button from "../elements/Buttons/Button.jsx";
import IconButton from "../elements/Buttons/IconButton.jsx";
import SimpleGradient from "../elements/Backgrounds/SimpleGradient.jsx";

export default function Start({ site }) {
    const buttonClasses = 
    `
    button bg-[var(--primary-color)] 
    hover:bg-[var(--tertiary-color)] 
    hover:transition-colors 
    duration-1000
    hover:duration-500
    active:bg-white
    active:duration-500
    active:scale-95
    active:scale-80 active:duration-75
    `
    ;
    
    
    const closeWindow = () => {
        window.close();
    };
    return (
        <div className="start-screen" >
            
            <div 
            className="container dyn-area bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem", borderRadius: "1rem"}}>

                <h1 lang-engine='p:sites:start.title'  style={{color: "var(--primary-text-color"}}>
                Underground RealMon
                </h1>
                <Button className={`${buttonClasses} start-button`}>
                    <p lang-engine='p:general:start' style={{color: "var(--primary-text-color"}}>

                    </p >
                </Button >
                <Button className={`${buttonClasses} settings-button` } 
                        onClick={() => site("debug")}
                >
                    <p lang-engine='p:general:settings' style={{color: "var(--primary-text-color"}}>

                    </p >
                </Button>
                <Button className={`${buttonClasses} exit-button`} onClick={closeWindow}>
                    <p lang-engine='p:general:exit' style={{color: "var(--primary-text-color"}}>

                    </p >
                </Button>

            </div>
            <style>
                
            </style>
        
        </div>
        
    );
}
