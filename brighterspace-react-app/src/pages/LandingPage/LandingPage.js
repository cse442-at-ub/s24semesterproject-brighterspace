import React from 'react'
import "./LandingPage.css"
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="landing-container">
            <div className="content-container">
                <div className="welcome-message">
                    <h1>Welcome to Brighterspace!</h1>
                    <p className="summary">The best educational platform for students and teachers!</p>
                </div>
                <div className="button-container">
                    <button className="click_button" onClick={() => navigate("/login")}>Login</button>
                    <button className="click_button" onClick={() => navigate("/login")}>Meet the Team</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage
