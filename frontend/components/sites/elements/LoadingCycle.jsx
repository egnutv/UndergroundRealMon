import React, { Component } from 'react';

export default function LoadingCycle() {



    return (

        <div className="loading-cycle bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{height: "10rem", width: "10rem"}}>
            <div className="loading-cycle-inner">
                <img src="frontend/media/graphics/icon-loadcycle.svg" className="bg-center animate-spin" style={{height: "100%", width: "100%"}}></img>
            </div>
        </div>

    );
}