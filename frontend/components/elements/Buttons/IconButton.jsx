import React, { Component } from 'react';

export default function Button(props) {



    return (
        <button className="icon-btn">
            {props.children}
            
        </button>
    );
}