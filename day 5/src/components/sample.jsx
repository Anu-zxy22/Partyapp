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
    <>
    <div className={`container ${isNavClosed ? 'nav-closed' : ''}`}>
      <div className="header">
        <div className="header-logo">
          {/*<svg className="site-logo" xmlns="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708677688/fb_j7i7er.png" viewBox="0 0 512 512">
            <path d="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708677688/fb_j7i7er.png" />
  </svg>*/}
  <div style={{ backgroundColor: "", display: "inline-block", marginLeft: "40px",marginBottom:"13px",paddingTop: "0.1px"  }}>
          <br></br>
          <img
    src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708682005/party_s5ybhn.png"
    alt="Alternative text"
    style={{ width: '30px', height: '30px', border: '1px solid white',backgroundColor: 'white'}}
  />{' '}</div>{' '}
          <span className="site-title">  Partyfy</span>
        </div>
        <div className="header-search">
          <button className="button-menu" onClick={handleMenuButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385">
              <path d="M12 120.3h361a12 12 0 000-24H12a12 12 0 000 24zM373 180.5H12a12 12 0 000 24h361a12 12 0 000-24zM373 264.7H132.2a12 12 0 000 24H373a12 12 0 000-24z" />
            </svg>
          </button>
          {/*<input type="search" placeholder="Search Documentation..." />*/}
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
          {/*<h1>Welcome back, John!</h1>*/}
          
          <img
  src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708684478/pexels-edoardo-tommasini-3249760_cpyr9g.jpg"
  alt="Alternative text"
  style={{ width: '100%', height: '50%', border: '1px solid black',backgroundColor: 'white' }}
/><br></br>
<img
  src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708677688/fb_j7i7er.png"
  alt="Alternative text"
  style={{ width: '100%', height: '100%', border: '1px solid black',backgroundColor: 'white' }}
/>
        </div>
        
      </div>
    </div>
    {/*hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii*/}
    
    <div className="w3-top">
      <div className="art">
    <p style={{ textAlign: "center" }}>THE ART OF THE PARTY</p>
    </div>
    <br></br>
    <p>The best events stem from the best hospitality. From the feeling your guests get when they walk into the space—to the drinks they’re handed, the revelry they feel, and the sounds that pull them toward the dance floor—you want your celebration to radiate generosity, gracious hosting, and the type of spirit that stays with them long after they leave. The good news? That’s exactly what we’re here to create.</p>
    <ul className="w3-navbar" id="myNavbar">
      <li>
        <a href="#" className="w3-padding-large">
          {/*Christian*/}
        </a>
      </li>
      <li className="w3-hide-small w3-right">
        <a href="#contact" className="w3-padding-large">
          {/*Contact*/}
        </a>
      </li>
      <li className="w3-hide-small w3-right">
        <a href="#portfolio" className="w3-padding-large">
          {/*Portfolio*/}
        </a>
      </li>
      <li className="w3-hide-small w3-right">
        <a href="#about" className="w3-padding-large">
          {/*About*/}
        </a>
      </li>
    </ul>
  </div>
  {/* First Parallax Image with Logo Text */}
  <div className="bgimg-1 w3-opacity w3-display-container">
    <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
      <h1 className="w3-center w3-padding-xlarge w3-black w3-xlarge w3-wide w3-animate-opacity">
        {/*CHRISTIAN <span className="w3-hide-small">PECSON</span>*/}
      </h1>
    </div>
  </div>
  {/* Container (About Section) */}
  <div className="w3-content w3-container w3-padding-64" id="about">
    {/*<h2 className="w3-center">ABOUT ME</h2>*/}
    <p className="w3-center">
      {/*<em>I love Programming</em>*/}
    </p>
    <p>{/*
      I am Christian Pecson. I am a dreamer whose dream is to build awesome
      things in the future and to contribute something useful to the world.But
hey this website symbolizes that I contribute something in the world.*/}
    </p>
    {/*  Profile Picture and Description  */}
    <div className="w3-row">
      <div className="w3-col m6 w3-center w3-section">
        <img
          src="https://www.dropbox.com/s/mm2bb2xyftqn6am/profile%20%281%29.jpg?raw=1"
          id="profile"
          className="w3-circle"
          alt="Photo of Me"
        />
      </div>
      {/* Hide this text on small devices */}
      <div className="w3-col m6 w3-hide-small w3-section">
        <p>
          By the help of FreeCodeCamp I will be a Full Stack Web Developer soon!
        </p>
      </div>
    </div>
  </div>
  {/* Second Parallax Image with Portfolio Text */}
  <div className="bgimg-2 w3-display-container" id="portfolio">
    <div className="w3-display-middle">
      <span className="w3-xxlarge w3-text-light-grey w3-wide">PORTFOLIO</span>
    </div>
  </div>
  {/* Container (Portfolio Section) */}
  <div className="w3-content w3-container w3-padding-64">
    <h2 className="w3-center">MY WORK</h2>
    <p className="w3-center">
      <em>
        Here are some of my latest lorem work.
        <br /> Click on the images to make them bigger
      </em>
    </p>
    <br />
    {/* Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) */}
    <div className="w3-row-padding w3-center">
      <div className="w3-col m3">
        <img
          src="https://unsplash.it/400/300?random"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
        />
      </div>
      <div className="w3-col m3">
        <img
          src="https://unsplash.it/400/301?random"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
        />
      </div>
      <div className="w3-col m3">
        <img
          src="https://unsplash.it/400/302?random"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
        />
      </div>
      <div className="w3-col m3">
        <img
          src="https://unsplash.it/400/303?random"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
        />
      </div>
    </div>
    <div className="w3-row-padding w3-center w3-section">
      <div className="w3-col m3">
        <img
          src="https://unsplash.it/400/304?random"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
        />
      </div>
      <div className="w3-col m3">
        <img
          src="https://unsplash.it/400/305?random"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
        />
      </div>
      <div className="w3-col m3">
        <img
          src="https://unsplash.it/400/306?random"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
        />
      </div>
      <div className="w3-col m3">
        <img
          src="https://unsplash.it/400/307?random"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          className="w3-hover-opacity"
        />
      </div>
    </div>
  </div>
  {/* Modal for full size images on click*/}
  <div
    id="modal01"
    className="w3-modal w3-black"
    onclick="this.style.display='none'"
  >
    <span className="w3-closebtn w3-hover-red w3-text-white w3-xxxlarge w3-container w3-display-topright">
      ×
    </span>
    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" style={{ maxWidth: "100%" }} />
    </div>
  </div>
  {/* Third Parallax Image with Portfolio Text */}
  <div className="bgimg-3 w3-display-container" id="contact">
    <div className="w3-display-middle">
      <h2 className="w3-xxlarge w3-text-light-grey w3-wide">CONTACT</h2>
    </div>
  </div>
  {/* Container (Contact Section) */}
  <div className="w3-content w3-container w3-padding-64">
    <h3 className="w3-center">WHERE I WORK</h3>
    <p className="w3-center">
      <em>I'd love your feedback!</em>
    </p>
    <address className="w3-row w3-padding-32 w3-section">
      <div className="w3-col m4 w3-container">
        {/* Add Google Maps */}
        <div id="googleMap" className="w3-round-large" />
      </div>
      <div className="w3-col m8 w3-container w3-section">
        <div className="w3-large w3-margin-bottom">
          <i
            className="fa fa-map-marker w3-hover-text-black"
            style={{ width: 30 }}
          />{" "}
          Kabankalan City, NIR, Philippines
          <br />
          <i
            className="fa fa-phone w3-hover-text-black"
            style={{ width: 30 }}
          />{" "}
          Phone: +639 0744 38325
          <br />
          <i
            className="fa fa-envelope w3-hover-text-black"
            style={{ width: 30 }}
          >
            {" "}
          </i>{" "}
          Email: christianpecson.io@gmail.com
          <br />
        </div>
        <p>Swing by for a cup of coffee, or leave me a note:</p>
        <div className="w3-row-padding" style={{ margin: "0 -16px 8px -16px" }}>
          <div className="w3-half">
            <input
              className="w3-input w3-border w3-hover-light-grey"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w3-half">
            <input
              className="w3-input w3-border w3-hover-light-grey"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <input
          className="w3-input w3-border w3-hover-light-grey"
          type="text"
          placeholder="Comment"
        />
        <a
          href="mailto:christianpecson.io@gmail.com"
          className="w3-btn w3-section w3-right"
        >
          SEND
        </a>
        <br></br>
      </div>
    </address>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>

      {/* Footer */}       
       <footer className="w3-center w3-dark-grey w3-padding-48 w3-hover-black cf">
        <div className="w3-half">
          <a target="_blank" href="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708426750/pic2_pxldgk.png">
            <i className="fa fa-fire fa-2x" />
          </a>
          <a target="_blank" href="https://www.facebook.com/chpecson">
            <i className="fa fa-facebook fa-2x" />
          </a>
          <a target="_blank" href="https://codepen.io/chpecson/">
            <i className="fa fa-codepen fa-2x" />
          </a>
        </div>
        <p className="w3-half">
        <div style={{ backgroundColor: "lightblue" }}><br></br>
        <br></br>
        <div style={{ backgroundColor: "lightblue", display: "inline-block", marginLeft: "70px" }}>
          
        <img
  src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708677688/fb_j7i7er.png"
  alt="Alternative text"
  style={{ width: '25px', height: '25px', border: '1px solid black',backgroundColor: 'white' }}
/>{' '}</div>
<div style={{ backgroundColor: "lightblue", display: "inline-block", marginLeft: "20px" }}>
<img
  src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708678626/twitter_vib0eh.png"
  alt="Alternative text"
  style={{ width: '25px', height: '25px', border: '1px solid black',backgroundColor: 'white' }}
/>
</div>
<div style={{ backgroundColor: "lightblue", display: "inline-block", marginLeft: "20px" }}>
<img
  src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1708679039/instagram_zzy33t.png"
  alt="Alternative text"
  style={{ width: '25px', height: '25px', border: '1px solid black',backgroundColor: 'white' }}
/>
</div>
</div><br></br>
© <span className="heart-icon">❤</span> by Christian Pecson and
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            title="W3.CSS"
            target="_blank"
            className="w3-hover-opacity"
          >
            w3.css
          </a>
        </p>
      </footer>

    </>
    
  );
}

export default Sample;