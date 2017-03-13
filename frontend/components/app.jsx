import React from 'react';
import GreetingContainer from './greeting_container';

const App = (props) => {
  return (
    <div>
      <h1>Clack</h1>
      <GreetingContainer />
      { props.children }
    </div>
  );
};

export default App;
