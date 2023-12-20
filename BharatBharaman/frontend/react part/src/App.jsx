import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import AddShortPost from './pages/addshort/addshort';
import SignIN from './pages/signin/signin';
import Mappy from './pages/maps/maps';
import Explore from './pages/explore/explore';
import Events from './pages/event/event';
import ShortsClips from './pages/shorts/shorts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIN />} />
        <Route path="/" element={<Home />} />
        <Route path='/maps' element={<Mappy/>}/>
        <Route path="/add/short" element={<AddShortPost />} />
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/shorts' element={<ShortsClips/>}/>
      </Routes>
    </Router>
  );
};

export default App;
