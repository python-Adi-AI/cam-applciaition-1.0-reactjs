// import React from 'react'
// import Home from './Components/Home/Home'
// import Navbar from './Components/Navbar/Navbar'
// import Footer from './Components/Footer/Footer'

// import "./assets/css/main.css"
// import Inventery from './OneSolution/Commercial/Inventery/Inventery'

// const App = () => {
//   return (
// <>

// <Navbar />
// <Home />

// <Inventery />
// <Footer />
// </>
//   )
// }

// export default App







import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Inventery from './OneSolution/Commercial/Inventery/Inventery';

import './assets/css/main.css';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventery" element={<Inventery />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;

