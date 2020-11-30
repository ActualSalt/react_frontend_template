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
                    Introduction
                </Button>
                <Button className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                link='projects'>
                    View Projects 
                </Button>
                
                <Button className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
                link='contact'>
                    Contact
                </Button>
            </div>
        </div>
    )
}
export default HeroSection;