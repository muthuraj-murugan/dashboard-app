import React from 'react'
import './progressbar.css'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Progressbar() {
    return (
        <div className='progress-circle'>
            <div className="completed">
                <div className="outer">
                    <div className="inner">
                        <div className="result">
                            70%
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="120px">
                <defs>
                    <linearGradient id="grad1">
                        <stop offset="0%" style={{ stopColor: '#59b1f2', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#59b1f2', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" stroke="rgb(0, 96, 165)" stroke-width="12" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="url(#grad1)" stroke-width="11" fill="none"
                    stroke-dasharray="251.2" stroke-dashoffset="75.36" stroke-linecap="round"
                    transform="rotate(-90 50 50)" />
                <text x="50" y="60" text-anchor="middle" font-size="8px" fill="#fff">Goal</text>
                <text x="50" y="70" text-anchor="middle" font-size="8px" fill="#fff">Completed</text>
            </svg>
        </div>
    )
}

export default Progressbar