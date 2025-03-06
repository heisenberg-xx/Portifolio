import React, { useState, useEffect } from 'react';
import { Navbar } from './components/NavBar/Navbar';
import { Home } from './components/Home';
import { Skills } from './components/Skills/Skills';
import { Works } from './components/works/Works';
import { Contact } from './components/Contact';
import ScrollReveal from 'scrollreveal';
import About from './components/About';
import Loader from './components/Loader';
import './index.css';

const MainHome = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: true,
        });

        const timer = setTimeout(() => setIsLoading(false), 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-black/95 to-black ">
                <Loader /> 
            </div>
        );
    }

    return (
        <div className="relative w-screen">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <Home />
            <hr />
            <About />
            <hr />
            <Skills />
            <hr />
            <Works />
            <hr />
            <Contact />
        </div>
    );
};

export default MainHome;
