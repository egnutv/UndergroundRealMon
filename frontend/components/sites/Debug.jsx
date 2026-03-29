import React, { Component } from 'react';

export default function Debug() {



    return (

        
        <div className="debug-screen" style={{height: "100%", width: "100%"}}>
            
            <div className='dummyElement' id='dummy1' style={{height: "100px", width: "100px", background: "red"} }
            sintpol-engine='
                {
                    "rules": [
                        {
                            "property": "width",
                            "source": "window.innerWidth",
                            "unit": "px",
                            "points": [
                                ["100", "100"],
                                ["1000", "30"]
                            ]
                        },
                        {
                            "property": "height",
                            "source": "window.innerHeight",
                            "unit": "px",
                            "points": [
                                ["500", "40"],
                                ["1200", "100"]
                            ]
                        }
                    ]
                }
            '
            >
            
            </div>
            <div className='dummyElement gen11' id='dummy2' style={{background: "red"} }
            
            >
                <p
                lang-engine='sites:start.title'
                >
                    DummyText
                </p>
                {/*
                <p
                lang-engine='
                {
                    "key": "sites:start.title",
                    "value": "Current Text"
                }
                '
                >
                    DummyText
                </p>
                */}
            </div>
        </div>

    );
}