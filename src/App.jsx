// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// App.js
import React from 'react';
console.log(React); 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      {/* Header acts as the default screen */}
      <Header />

      <Routes>
        {/* Define routes for other components */}
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      {/* Your logo images and footer can be displayed here */}
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
      <Footer />
    </Router>
  );
};

export default App;
