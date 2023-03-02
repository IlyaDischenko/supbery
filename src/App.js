import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header'
import Main from './components/main/Main'
import Menu from './components/menu/Menu'
import Deliver from './components/deliver/Deliver'
import News from './components/news/News'
import Contact from './components/contact/Contact'
import About from './components/about/About'

import NewsPage from './components/news/newsPage/NewsPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/delivery" element={<Deliver />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/news/item" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
