import React from 'react';
import { Navbar } from './components/NavBar/Navbar';
import { Home } from './components/Home';
import { Skills } from './components/Skills/Skills';
import { Works } from './components/works/Works';
import { Contact } from './components/Contact';
import './index.css'; // Ensure to import your CSS file

function App() {
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

export default App;
