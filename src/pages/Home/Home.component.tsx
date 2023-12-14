import { useState, useEffect } from 'react';
import { Featured } from '../../components/Featured/Featured.component';
import { PhaseRow } from '../../components/PhaseRow/PhaseRow.component';
import { Phase } from '../../types';
import { Media } from '../../types';
import { apiCall } from '../../utils/api';
import './Home.scss';

function Home() {
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
    
  }, [])

  
  return (
    <div className="App">
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

export default Home;
