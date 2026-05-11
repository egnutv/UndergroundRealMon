import React, { Component } from 'react';
import Button from "../elements/Buttons/Button.jsx";

export default function Debug({ site }) {

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

    return (

        
        <div className="debug-screen" style={{height: "100%", width: "100%", background: "white"}}>
            <div style={{height: "100%", width: "100%", backgroundColor: "white"}}>
                <Button className={`${buttonClasses} settings-button` } 
                        onClick={() => site("start")}
                >
                    <p lang-engine='p:general:settings' style={{color: "var(--primary-text-color"}}>

                    </p >
                </Button>
            </div>
        </div>

    );
}