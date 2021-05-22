import React from 'react';
import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            <div class="topnav">
                {/* <a href="#home">Home</a> */}
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            <div class="center-screen">
                <h2>Think that you know everything about FIFA World Cup?</h2>
                <p>Register and find out to take the FIFA World Cup Quiz</p>
            </div>
        </div>
    )
}

export default Homepage
