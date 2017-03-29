import React from 'react';

const loader = (
    <div id="loader">
      <div id="loading-text">Loading...
        <div className="loader">Loading...</div>
      </div>

    </div>
);

const LoadingScreen = () => (
  <div id="client">
    <div id="sidebar">
      <div id="fake-container">
        <div className="fake" id="fake-long-bar"></div>
        <div className="fake" id="fake-tiny-bar"></div>
      </div>
      <div id="fake-container">
        <div className="fake" id="fake-tiny-bar"></div>
        <div className="fake" id="fake-small-bar"></div>
      </div>
      <div id="fake-container">
        <div className="fake" id="fake-long-bar"></div>
        <div className="fake" id="fake-medium-bar"></div>
        <div className="fake" id="fake-long-bar"></div>

        <div className="fake" id="fake-long-bar"></div>
        <div className="fake" id="fake-medium-bar"></div>
        <div className="fake" id="fake-long-bar"></div>
      </div>
    </div>
    <div id="fake-main">
      <div id="fake-header">
        <div id="fake-header-container">
          <div className="fake2" id="fake-longer-bar"></div>
          <div className="fake2" id="fake-medium-bar"></div>
        </div>
        <div id="fake-header-container">
          <div className="fake2" id="fake-smaller-bar"></div>
          <div className="fake2" id="fake-longer-bar"></div>
          <div className="fake2" id="fake-smaller-bar"></div>
          <div className="fake2" id="fake-smaller-bar"></div>
          <div className="fake2" id="fake-smaller-bar"></div>
        </div>
      </div>
      { loader }
    </div>
  </div>
);

export default LoadingScreen;
