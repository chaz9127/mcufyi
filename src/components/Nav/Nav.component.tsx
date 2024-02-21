import { useState, useEffect } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { SearchBar } from '../SearchBar/SearchBar.component';
import './Nav.component.scss';
import Results from '../../TestData/results.json';
import { FeedbackModal } from '../FeedbackModal/FeedbackModal.component';

type SearchResult = {
  name: string,
  thumbnail: string,
}

const goTo = (url: string) => {
  window.location.href = url;
}

export const Nav = () => {
  const [ showNavMenu, setShowNavMenu ] = useState(false);
  const [ showFeedbackModal, setShowFeedbackModal ] = useState(false);

  const closeFeedbackModal = () => {
    setShowFeedbackModal(false);
  }

  const switchShowNavMenu = () => {console.log('switch');setShowNavMenu(!showNavMenu)};
  const hidehShowNavMenu = (ele:any) => {
    const clickedMenu = ele.target.className.includes('fa-bars');
    !clickedMenu && setShowNavMenu(false);
  };
  useEffect(() => {
    document.getElementsByTagName('html')[0].addEventListener('click', hidehShowNavMenu, false);

    return () => document.getElementsByTagName('body')[0].removeEventListener('click', hidehShowNavMenu, false);
  }, [])  

  return (
    <>
      <FeedbackModal isOpen={showFeedbackModal} closeCallback={closeFeedbackModal}/> 
      <div className="navbar-container">
        <nav className="navbar navbar-desktop">
          <div onClick={switchShowNavMenu}><i className="fa-solid fa-bars"></i></div>
          <div onClick={() => goTo('/')} className="logo">
            <span>TheMcu.fyi</span>
          </div>
          <SearchBar results={Results.results} />
          <div className="donate">
            <div id="donate-button">
              <img
                className="donate-buttom-img"
                alt="Donate via Paypal"
                src='https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif'
                data-tooltip-id="donate-buttom-img"
                data-tooltip-content="Coming Soon"
                data-tooltip-place="bottom"
              />
            </div>
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
            <li
              className="nav-menu-item"
              onClick={() => setShowFeedbackModal(true)}
            >
              <i className="fa-solid fa-comment-dots nav-menu-icon"></i>
                Feedback
            </li>
            <li 
              className="nav-menu-item"
              data-tooltip-id="donate-buttom-img"
              data-tooltip-content="Coming Soon"
              data-tooltip-place="right"
            >
              <i className="fa-solid fa-coins nav-menu-icon"></i>
              Donate
            </li>
          </ul>
        </div>}
        <Tooltip id="login-register" />
        <Tooltip id="donate-buttom-img" />
      </div>
    </>
  )
}

