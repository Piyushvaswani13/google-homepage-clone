import React from 'react';
import './App.css';

function App() {
  return ( 
    <div className="google-home-page">
      <header className="header">
        <div className="header-left">
          <a href="https://www.google.com/" >
            <img src="/google-logo.png" alt="Google Logo" />
          </a>
        </div>
        <div className="header-right">
          <a href="https://mail.google.com/" >Gmail</a>
          <a href="https://images.google.com/" >Images</a>
          <a href="https://www.google.co.in/intl/en/about/products?tab=rh" ><img src="/al-icon.png" alt="dots" /></a>
          <a href="https://accounts.google.com/SignOutOptions?" >
          <img src="/prof.png" alt="profile" className="profile" /></a>
        </div>
      </header>
      <main className="main">
        <img src="/g-doodle.gif" alt="doodle"></img>
        <div className="search-bar">
        <i class="fa fa-search" ></i>
          <input type="text" placeholder="Search Google or type a URL" />
          <button id="voiceSearchButton" class="realbox-icon-button" title="Search by voice"></button>
          <button id="lensSearchButton" class="realbox-icon-button" title="Search by image"></button>
        </div>
        <div className="shortcuts">
        <a href="https://www.primevideo.com" className="shortcut">
        <img src="/prime.png" alt="logo" className="shortcut-img" /><span>Prime Video</span></a>
          <a href="https://photos.google.com" className="shortcut">
          <img src="/g-logo.png" alt="logo" className="shortcut-img" /><span>Google Photos</span></a>
          <a href="http://192.168.1.1" className="shortcut">
          <img src="/ip.png" alt="logo" className="shortcut-img" /><span>192.168.1.1</span></a>
          <a href="https://www.online-java.com" className="shortcut">
          <img src="/tutorialpoint.png" alt="logo" className="shortcut-img" /><span>Online Java</span></a>
          <a href="/" className="shortcut">
          <img src="/plus1.png" alt="logo" className="shortcut-img" /><span>Add Shortcut</span></a>
          </div>
      </main>
      <footer className="footer">
        <button className="customise-chrome-button"><i class="fa fa-pencil" ></i>  Customise Chrome </button>
      </footer>
    </div>
  );
}

export default App;