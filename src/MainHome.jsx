import React from 'react'
import { useEffect } from 'react';
import { Navbar } from './components/NavBar/Navbar';
import { Home } from './components/Home';
import { Skills } from './components/Skills/Skills';
import { Works } from './components/works/Works';
import { Contact } from './components/Contact';
import ScrollReveal from 'scrollreveal';
import './index.css';



export const MainHome = () => {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true
        });
    }, []);

    return (
        <div className="">
            <Navbar />
            <Home />
            <hr />
            <Skills />
            <hr />
            <Works />
            <hr />
            <Contact />
            
        </div>
    );
}



