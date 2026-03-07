import React, { Component } from 'react';

export default function Button(props) {



    return (
        <button className="bg-amber-700 text-white px-4 py-2 rounded-lg overflow-auto">
            {props.children}
        </button>
    );
}