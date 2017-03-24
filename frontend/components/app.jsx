import React from 'react';
import SessionFormContainer from './session_form_container';

class App extends React.Component {

  render () {
    return (
      <div>
        <SessionFormContainer />
        <video id="background-video" loop autoPlay muted>
          <source src={'http://res.cloudinary.com/dwqeotsx5/video/upload/v1490374875/563400030_pgaidm.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default App;
