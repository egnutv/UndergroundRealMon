import React from 'react';
import isla from '../../../media/graphics/backgrounds/isla.png';
import cloud1 from '../../../media/graphics/elements/clouds/cloud1.png';
import cloud2 from '../../../media/graphics/elements/clouds/cloud2.png';

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
                />
            </layer>

            <layer>
                <div className="cloudLayer">
                    <cloud className="cloud1"></cloud>
                </div>
            </layer>

            <layer>
                <div className="cloudLayer">
                    <cloud className="cloud2"></cloud>
                </div>
            </layer>

            <layer>
                <landscape></landscape>
            </layer>

            <style>
                {`
                    .wildilife {
                        overflow: hidden;}
                    landscape {
                        background-image: url(${isla});
                    }

                    landscape, cloud {
                        
                        position: absolute;
                        bottom: 0;
                        left: 0;

                        width: 100%;
                        height: 100%;

                        background-size: cover;
                        background-position: center;
                        overflow: visible;
                    }
                    cloud {
                        
            
                    }

                    layer {
                    
                        overflow: hidden;
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;   
                    }

                    
                    .cloudLayer {
                        position: relative;
                        overflow: visible;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        maxWidth: 100%;
                        animation: cloudMove 60s linear infinite;
                    }

                    .cloud1 {
                        top: 0;
                        left: 0;
                        background-image: url(${cloud1});
                    }

                    .cloud2 {
                        top: 0;
                        left: 0;
                        background-image: url(${cloud2});
                    }

                    @keyframes cloudMove {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(100%);
                        }
                    }
                `}
            </style>
        </div>
    );
}