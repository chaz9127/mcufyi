import React from 'react';
import logo from './logo.svg';
import { Nav } from './components/Nav/Nav.component';
import { Featured } from './components/Featured/Featured.component';
import { PhaseRow } from './components/PhaseRow/PhaseRow.component';
import Phases from './TestData/phases.json';
import { Phase } from './types';
import './App.css';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Featured />
      {Phases.phases.map((phase: Phase) => {
        return <PhaseRow phase={phase}/>
      })}
    </div>
  );
}

export default App;
