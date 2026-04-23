import React, { Component } from 'react';



export default function SimpleGradient(props) {



    return (

        <div className="gradient" style={{minHeight: "100%", minWidth: "100%", backgroundImage: props.gradient}}>
        </div>

    );
}