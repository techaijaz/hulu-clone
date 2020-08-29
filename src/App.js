import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Reasults from './Reasults'
import request from './request'

function App() {

  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption}/>
      <Reasults selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
