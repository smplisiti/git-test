import React from 'react';
import Entry from "./components/Entry";
import Testimonial from "./components/Testimonial";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./components/Entry.css";
import Features from './components/Features';



function App () {
  return (
    <div className="App">
      <Entry />
      <Features />
      <Testimonial />

    </div>
  );
}

export default App;
