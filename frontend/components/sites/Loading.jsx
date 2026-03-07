import React, { Component } from 'react';

import LoadingCycle from "../elements/LoadingCycle.jsx";
import SimpleGradient from "../elements/Backgrounds/SimpleGradient.jsx";

export default function Loading() {



    return (

        
        <div className="loading-screen" style={{height: "100%", width: "100%"}}>
            <LoadingCycle></LoadingCycle>
            <SimpleGradient gradient={"var(--night-gradient)"}>
            </SimpleGradient>
        </div>

    );
}