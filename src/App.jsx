import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Resume from './pages/Resume';
import About from './pages/About';
import Article from './components/Article';
import Footer from './components/Footer';
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="projects/:title" element={<Article filePath={'../content/portfolioWebsite.md'}/>}/> */}
        <Route path="projects/:title" element={<Article section="projects"/>}/>
        <Route path="experiences/:title" element={<Article section="experiences"/>}/>

        {/* <Route path="projects/:title" element={<Article filePath={'../content/portfolioWebsite.md'}/>}/> */}
        <Route path="/about" element={<About />} />
        {/* 404 Route (Catch-All) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* { console.log("ts pmo fr")} */}
      <Footer/>
    </div>
  );
}

export default App;
