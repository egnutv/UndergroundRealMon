import React, { Component } from 'react';



export default function SimpleGradient(props) {



    return (

        <div className="loading-screen" style={{height: "100%", width: "100%", backgroundImage: props.gradient}}>
        </div>

    );
}