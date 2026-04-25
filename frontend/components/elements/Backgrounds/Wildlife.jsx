import React from 'react';

export default function Wildlife(props) {
    return (
        <div
            className="wildlife bg-center absolute top-0 left-0"
            style={{
                minHeight: "100%",
                minWidth: "100%",
                backgroundImage: "var(--day-gradient)"
            }}
        >
            
            <layer>
            <div
                className="sun rounded-full blur-2xl"
                style={{
                    height: "10rem",
                    width: "10rem",
                    background: "var(--light-orange)"
                }}
                >
                </div>
            </layer>
            <layer>
                <div
                className="clouds"
                style={{
                    height: "10rem",
                    width: "10rem",
                    background: "#fff"
                }}
                >
                </div>
            </layer>
            <style>
                {`
                    layer {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;}
                    layer {
                        .clouds {
                            
                            
                        }
                `}
            </style>
        </div>
    );
}