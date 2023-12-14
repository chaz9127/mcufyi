import './Featured.component.scss';
import '../../types/Featured';
import featuredData from '../../TestData/featured.json';

export const Featured = () => {
  const goTo = (url: string) => {
    window.location.href = url;
  };
  return (                 
    <div className="featured-container">
      <div className="featured-tile">
        <div className="featured-buttons">
          <div className="tile-logo">
            <img src={`${process.env.PUBLIC_URL}${featuredData.featured.logoImageUrl}`} />
          </div>
          <div className="tile-button-container">
            <button onClick={() => goTo(`${process.env.PUBLIC_URL}media/${featuredData.featured.showTitle}`)} className="tile-button">
              <span className="tile-button-icon">
                <i className="fa-solid fa-info"></i>
              </span>
              <span className="tile-button-text">
                Get Info
              </span>
            </button>
            <button onClick={() => goTo(featuredData.featured.watchUrl)} className="tile-button">
              <span className="tile-button-image">
                <img src={`${process.env.PUBLIC_URL}${featuredData.featured.watchIconUrl}`}/>
              </span>
              <span className="tile-button-text">
                Watch Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

