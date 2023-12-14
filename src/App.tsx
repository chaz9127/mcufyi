import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Nav } from './components/Nav/Nav.component';
import { Featured } from './components/Featured/Featured.component';
import { PhaseRow } from './components/PhaseRow/PhaseRow.component';
import Phases from './TestData/phases.json';
import { Phase } from './types';
import { Media } from './types';
import { apiCall } from './utils/api';
import './App.css';

function App() {
  const [phases, setPhases] = useState<Array<Array<Media>>>([]);

  useEffect(() => {
    const getMedia = async () => {
      const buildParams = '?sortBy=phase'
      const data = await apiCall(`/media${buildParams}`);
      return data;
    }
  
    const getPhases = async () => {
      const allMedia: Media[] = await getMedia();
      let phases: Array<Array<Media>> = [];
      allMedia.forEach(med => {
        const medPhase = med.phase-1;
        const currentPhase = phases[medPhase];
        if (currentPhase) {
          phases[medPhase].push(med);
        } else {
          phases.push([med]);
        }
      });
      
      setPhases(phases);
      return phases;
    }
    getPhases();
    // getMedia().then((data: Media[]) => {
    //   getPhases(data).then((allPhases: Array<Array<Media>>) => {
    //     console.log('data?', allPhases)
    //   })
    // })
    
  }, [])

  
  return (
    <div className="App">
      <Nav/>
      <Featured />
      {Array(phases.length).fill(0).map((phaseNum: any, idx: number) => {
        console.log('phases!', phases)
        const mediaForPhase: Media[] = phases[idx];
        console.log('mediaForPhase?', mediaForPhase)
        const phase: Phase = {
          name: `Phase ${idx+1}`,
          media: mediaForPhase,
        }
        return <PhaseRow phase={phase}/>
      })}
    </div>
  );
}

export default App;
