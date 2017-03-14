import React from 'react';
import ReactDOM from 'react-redux';
import {Link} from 'react-router';

class Greeting extends React.Component {
  constructor (props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout (e) {
    e.preventDefault();
    this.props.logout();
  }

  render () {
    const logged = () => (
      <div>
        <h1>Welcome to Clack, {this.props.currentUser.username}</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );

    const unlogged = () => (
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current">Sign up!</Link>
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
