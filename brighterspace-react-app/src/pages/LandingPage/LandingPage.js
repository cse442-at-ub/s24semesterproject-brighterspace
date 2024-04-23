import React from 'react'
import "./LandingPage.css"

function LandingPage() {
    return (
        <div className="landing-container">
            <div className="content-container">
                <div className="welcome-message">
                    <h1>Welcome to Our Website!</h1>
                    <p className="summary">Explore our services and meet our team to learn more about what we do and how we can help you achieve your goals.</p>
                </div>
                <div className="button-container">
                    <button className="click_button" onClick={() => window.location.href = '/login'}>Login</button>
                    <button className="click_button" onClick={() => window.location.href = '/team'}>Meet the Team</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage
