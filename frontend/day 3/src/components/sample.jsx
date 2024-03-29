import React, { useState, useEffect } from 'react';

import '../assets/sample.css';

function Sample() {
  const [isNavClosed, setNavClosed] = useState(false);
  const responsiveBreakpoint = 991;

  useEffect(() => {
    const container = document.querySelector('.container');
    const pageContent = document.querySelector('.page-content');

    const closeNavIfMobile = () => {
      if (window.innerWidth <= responsiveBreakpoint) {
        setNavClosed(true);
      }
    };

    window.addEventListener('resize', closeNavIfMobile);

    return () => {
      window.removeEventListener('resize', closeNavIfMobile);
    };
  }, []);

  const handleMenuButtonClick = () => {
    setNavClosed(!isNavClosed);
  };

  const handlePageContentClick = () => {
    if (window.innerWidth <= responsiveBreakpoint) {
      setNavClosed(true);
    }
  };

  return (
    <div className={`container ${isNavClosed ? 'nav-closed' : ''}`}>
      <div className="header">
        <div className="header-logo">
          <svg className="site-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M512 256a15 15 0 00-7.1-12.8l-52-32 52-32.5a15 15 0 000-25.4L264 2.3c-4.8-3-11-3-15.9 0L7 153.3a15 15 0 000 25.4L58.9 211 7.1 243.3a15 15 0 000 25.4L58.8 301 7.1 333.3a15 15 0 000 25.4l241 151a15 15 0 0015.9 0l241-151a15 15 0 00-.1-25.5l-52-32 52-32.5A15 15 0 00512 256zM43.3 166L256 32.7 468.7 166 256 298.3 43.3 166zM468.6 346L256 479.3 43.3 346l43.9-27.4L248 418.7a15 15 0 0015.8 0L424.4 319l44.2 27.2zM256 388.3L43.3 256l43.9-27.4L248 328.7a15 15 0 0015.8 0L424.4 229l44.1 27.2L256 388.3z" />
          </svg>
          <span className="site-title">Layerz</span>
        </div>
        <div className="header-search">
          <button className="button-menu" onClick={handleMenuButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385">
              <path d="M12 120.3h361a12 12 0 000-24H12a12 12 0 000 24zM373 180.5H12a12 12 0 000 24h361a12 12 0 000-24zM373 264.7H132.2a12 12 0 000 24H373a12 12 0 000-24z" />
            </svg>
          </button>
          <input type="search" placeholder="Search Documentation..." />
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          <ul>
            <li><a href="#" className="active"><i className="lni lni-home"></i><span>Dashboard</span></a></li>
            <li><a href="#"><i className="lni lni-text-format"></i><span>Form Elements</span></a></li>
            <li><a href="#"><i className="lni lni-bar-chart"></i><span>Charts</span></a></li>
            <li><a href="#"><i className="lni lni-grid"></i><span>Grid System</span></a></li>
            <li><a href="#"><i className="lni lni-bullhorn"></i><span>Notifications</span></a></li>
            <li><a href="#"><i className="lni lni-support"></i><span>Help & Support</span></a></li>
          </ul>
        </div>
        <div className="page-content" onClick={handlePageContentClick}>
          <h1>Welcome back, John!</h1>
        </div>
      </div>
    </div>
    
  );
}

export default Sample;