import React from 'react';

import '../assets/home.css';

function Home() {
  return (
    <>
    <section id="sidebar">
      <div className="white-label"></div>
      <div id="sidebar-nav">
        <ul>
          <li className="active">
            <a href="#">
              <i className="fa fa-dashboard" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-desktop" /> My Website
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-usd" /> Ecommerce
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-pencil-square-o" /> My Blog
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sitemap" /> SEO Tools
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-line-chart" /> Reporting
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-comments-o" />
              Social Marketing
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker" /> Get Traffic
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-users" /> Employees
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-calendar-o" /> Reservations
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-calendar" /> Calendar
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section id="content">
      <div id="header">
        <div className="header-nav">
          <div className="menu-button">{/*<i class="fa fa-navicon"></i>*/}</div>
          <div className="nav">
            <ul>
              <li className="nav-settings">
                <div className="font-icon">
                  <i className="fa fa-tasks" />
                </div>
              </li>
              <li className="nav-mail">
                <div className="font-icon">
                  <i className="fa fa-envelope-o" />
                </div>
              </li>
              <li className="nav-calendar">
                <div className="font-icon">
                  <i className="fa fa-calendar" />
                </div>
              </li>
              <li className="nav-chat">
                <div className="font-icon">
                  <i className="fa fa-comments-o" />
                </div>
              </li>
              <li className="nav-profile">
                <div className="nav-profile-image">
                  <img
                    src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708426750/pic2_pxldgk.png"
                    alt="profile-img"
                  />
                  <div className="nav-profile-name">
                    Jane Smith
                    <i className="fa fa-caret-down" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-header">            
          <h1></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
            
        
        </div>
        <div className="widget-box sample-widget">
          <div className="widget-header">
            <h2>Widget Header</h2>
            <i className="fa fa-cog" />
          </div>
          <div className="widget-content">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
          </div>
        </div>
        <div className="widget-box sample-widget">
          <div className="widget-header">
            <h2>Widget Header</h2>
            <i className="fa fa-cog" />
          </div>
          <div className="widget-content">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
          </div>
        </div>
        <div className="widget-box sample-widget">
          <div className="widget-header">
            <h2>Widget Header</h2>
            <i className="fa fa-cog" />
          </div>
          <div className="widget-content">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
          </div>
        </div>
        <div className="widget-box sample-widget">
          <div className="widget-header">
            <h2>Widget Header</h2>
            <i className="fa fa-cog" />
          </div>
          <div className="widget-content">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png" />
          </div>
        </div>
      </div>
    </section>
  </>
  

     
  );
}

export default Home;