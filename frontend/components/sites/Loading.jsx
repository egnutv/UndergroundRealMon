import React, { Component } from 'react';

import LoadingCycle from "../elements/LoadingCycle.jsx";

export default function Loading() {



    return (

        <div className="loading-screen" style={{height: "100%", width: "100%", backgroundImage: "var(--night-gradient)"}}>
            <LoadingCycle></LoadingCycle>
        </div>

    );
}