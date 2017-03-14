import React from 'react';
import GreetingContainer from './greeting_container';

const App = (props) => {
  return (
    <div>
      <h1>Clack</h1>
      <GreetingContainer />
      <video id="background-video" loop autoPlay muted>
        <source src={'http://res.cloudinary.com/dwqeotsx5/video/upload/v1489515523/Pug_iz1qud.mp4'} type="video/mp4" />
        <source src={'http://res.cloudinary.com/dwqeotsx5/video/upload/v1489515523/Pug_iz1qud.mp4'} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      { props.children }
    </div>
  );
};

export default App;
