import { Phase, Production } from '../../types';
import './PhaseRow.component.scss';

type PhaseRowProps = {
  phase: Phase
}

export const PhaseRow = (props: PhaseRowProps) => {
  const { name,  productions } = props.phase;
  const displayPhase = () => {
    return (
      <div key={name} className="phase-container">
        <h2 className="phase-title">{name}</h2>
        <div className="phase-results-container">
          {productions.map((production: Production) => {
            return (
              <a href="/" className="phase-result">
                <img className="phase-result-poster" src={production.poster} />
                <span className="phase-result-title" >{production.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    )
  }

  return displayPhase()
}