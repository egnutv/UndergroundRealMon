import React, { Component } from 'react';

export default function Button(props) {



    return (
        <button 
        {...props}
            className={`px-4 py-2 rounded-lg overflow-auto cursor-pointer ${props.className || ""}`}
            
        >
            {props.children}
        </button>
    );
}