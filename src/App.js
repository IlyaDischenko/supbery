import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Menu from './components/menu/Menu';


function App() {


  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
