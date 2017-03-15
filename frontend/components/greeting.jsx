import React from 'react';
import ReactDOM from 'react-redux';
import { Link, hashHistory } from 'react-router';

class Greeting extends React.Component {
  constructor (props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  logout (e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClick (e) {
    console.log('handling click');
    e.preventDefault();
    if (e.target.id === 'login') {
      hashHistory.push("/login");
    } else {
      hashHistory.push("/signup");
    }
  }

  render () {
    const logged = () => (
      <div>

      </div>
    );

    const unlogged = () => (
      <nav id="login-signup">
        <button onClick={this.handleClick} id="login">Login</button>
        <button onClick={this.handleClick} id="signup">Sign up</button>
      </nav>
    );

    return (
      <div>
        {this.props.currentUser ? logged() : unlogged()}
      </div>
    );
  }
}

export default Greeting;
