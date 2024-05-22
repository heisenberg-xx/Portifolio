import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainHome } from './MainHome';

import { ThankU} from './ThankU';
import './index.css';

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<MainHome />} />
       <Route path="/thank-u" element={<ThankU />} />
     </Routes>
   </Router>
  );
}

export default App;
