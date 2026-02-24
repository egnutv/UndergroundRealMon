import React, { Component } from 'react';

export default function LoadingCycle() {



    return (

        <div className="loading-cycle bg-red-500" style={{height: "10vw", width: "10vw"}}>
            <div className="loading-cycle-inner">
                <img src="frontend/media/graphics/icon-loadcycle.png" style={{height: "100%", width: "100%"}}></img>
            </div>
        </div>

    );
    /*return (
        <div className="bg-red-500 text-white p-4">Test</div>
    )*/
}