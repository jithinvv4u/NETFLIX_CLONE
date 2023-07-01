import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RawPost from './components/RawPost/RawPost';
import { action, horror, originals } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost url={originals} title="Netflix Originals"/>
      <RawPost url={action} title="Action" isSmall />
      <RawPost url={horror} title="Horror" isSmall />
    </div>
  );
}

export default App;
