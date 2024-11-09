
    import React from 'react';
    import './Hero.css';
    import Navbar from './Navbar';
    
    const Hero = () => {
        return (
            <div id="hero">
                <Navbar />
                <div className="hero-container">
                    <div className="hero-placeholder"></div>
                    <div className="hero-text-container">
                        <div>
                            <p className="hero-name">I'm Maham</p>
                            <p className="hero-title">FrontEnd Developer...</p>
                            <p className="hero-welcome">Welcome to my portfolio</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    export default Hero;
    
