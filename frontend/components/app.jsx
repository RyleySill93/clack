import React from 'react';
import GreetingContainer from './greeting_container';

const App = (props) => {
  return (
    <div>
      <header id="splash-header">
        <div>
          <img src={'http://res.cloudinary.com/dwqeotsx5/image/upload/v1489531049/view_ijvafi.png'} width="68px" height="68px" />
          Clack
        </div>
        <GreetingContainer />
      </header>

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
