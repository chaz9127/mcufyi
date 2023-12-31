import { Phase, Media } from '../../types';
import './PhaseRow.component.scss';

type PhaseRowProps = {
  phase: Phase
}

export const PhaseRow = (props: PhaseRowProps) => {
  const { name,  media } = props.phase;
  const displayPhase = () => {
    return (
      <div className="phase-container">
        <h2 className="phase-title">{name}</h2>
        <div className="phase-results-container">
          {media.map((media: Media) => {
            return (
              <a key={media._id} href={`/media/${media.name}`} className="phase-result">
                <img className="phase-result-poster" src={media.poster} />
                <span className="phase-result-title" >{media.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    )
  }

  return displayPhase()
}