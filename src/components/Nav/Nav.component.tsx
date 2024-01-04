import { useState, useEffect } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { SearchBar } from '../SearchBar/SearchBar.component';
import './Nav.component.scss';
import Results from '../../TestData/results.json';
import { Link } from 'react-router-dom';

type SearchResult = {
  name: string,
  thumbnail: string,
}

const goTo = (url: string) => {
  window.location.href = url;
}

export const Nav = () => {
  const [ showNavMenu, setShowNavMenu ] = useState(false);

  const switchShowNavMenu = () => {console.log('switch');setShowNavMenu(!showNavMenu)};
  const hidehShowNavMenu = (ele:any) => {
    console.log('toggleHideShow')
    const clickedMenu = ele.target.className.includes('fa-bars');
    !clickedMenu && setShowNavMenu(false);
  };
  useEffect(() => {
    document.getElementsByTagName('html')[0].addEventListener('click', hidehShowNavMenu, false);

    return () => document.getElementsByTagName('body')[0].removeEventListener('click', hidehShowNavMenu, false);
  }, [])   
           
  return (                 
    <div className="navbar-container">
      <nav className="navbar navbar-desktop">
        <div onClick={switchShowNavMenu}><i className="fa-solid fa-bars"></i></div>
        <div onClick={() => goTo('/')} className="logo">
          <span>TheMcu.fyi</span>
        </div>
        <SearchBar results={Results.results} />
        <div className="donate">
        <div id="donate-button"><img src='https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif' /></div>
        </div>
      </nav>
      <nav className="navbar navbar-mobile">
        <div onClick={switchShowNavMenu}><i className="fa-solid fa-bars"></i></div>
        <SearchBar results={Results.results} />
      </nav>
      {showNavMenu && <div className="nav-menu">
        <ul>
          <li onClick={() => goTo('/')} className="nav-menu-item logo-item">
            <div className="logo">
              <span>TheMcu.fyi</span>
            </div>
          </li>
          <li
            className="nav-menu-item"
            data-tooltip-id="login-register"
            data-tooltip-content="Coming Soon"
            data-tooltip-place="right"
          >
            <i className="fa-solid fa-user-plus nav-menu-icon"></i>
            Login / Register
          </li>
          <li className="nav-menu-item"><i className="fa-solid fa-list nav-menu-icon"></i>Browse</li>
          <li className="nav-menu-item"><i className="fa-solid fa-comment-dots nav-menu-icon"></i>Feedback</li>
          <li className="nav-menu-item"><i className="fa-solid fa-coins nav-menu-icon"></i>Donate</li>
        </ul>
      </div>}
      <Tooltip id="login-register" />
    </div>
  )
}

