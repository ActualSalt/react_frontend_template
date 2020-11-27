import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Min Young Lee</h1>
            <p>Full Stack Web Developer</p>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    View Projects 
                </Button>
                <Button className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    Get Resume
                </Button>
                <Button className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    Contact Min
                </Button>
            </div>
        </div>
    )
}
export default HeroSection;