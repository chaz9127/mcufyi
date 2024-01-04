import './Featured.component.scss';
import '../../types/Featured';
import { Button } from '../Button/Button.component';
import featuredData from '../../TestData/featured.json';

export const Featured = () => {
  return (                 
    <div className="featured-container">
      <div className="featured-tile">
        <div className="featured-buttons">
          <div className="tile-logo">
            <img alt={featuredData.featured.showTitle} src={`${process.env.PUBLIC_URL}${featuredData.featured.logoImageUrl}`} />
          </div>
          <div className="tile-button-container">
            <Button
              url={`${process.env.PUBLIC_URL}media/${featuredData.featured.showTitle}`}
              text="Get Info"
              iconClass="fa-solid fa-info"
              tertiary
            />
            <Button
              url={featuredData.featured.watchUrl}
              text="Watch Now"
              imgUrl={`${process.env.PUBLIC_URL}${featuredData.featured.watchIconUrl}`}
              tertiary
            />
          </div>
        </div>
      </div>
    </div>
  )
}

