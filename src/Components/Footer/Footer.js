import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container mt-5 p-5">
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-3 bd-highlight"><a href="#link"><b>Google</b></a></div>
                    <div className="p-3 bd-highlight"><a href="#link">About Google</a></div>
                    <div className="p-3 bd-highlight"><a href="#link">Google Products</a></div>
                    <div className="p-3 bd-highlight"><a href="#link">Privacy</a></div>
                    <div className="p-3 bd-highlight"><a href="#link">Terms</a></div>
                </div>
            </div>
        </div>
    )
}
