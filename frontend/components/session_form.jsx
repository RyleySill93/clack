import React from 'react';
import {Link} from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.id === 'username') {
      const username = e.target.value;
      this.setState({username});
    } else {
      const password = e.target.value;
      this.setState({password});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/messages/1'));
  }

  render () {
    const log = (
        <Link to="/login">Log In</Link>
    );

    const sign = (
        <Link to="/signup">Sign Up</Link>
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input type="text" onChange={this.handleChange} id="username"></input>
          </label>
          <label>
            Password
            <input type="text" onChange={this.handleChange} id="password"></input>
          </label>
          <input type="submit" value="submit"></input>
        </form>
        {this.props.formType === 'login' ? sign : log}
      </div>
    );
  }
}

export default SessionForm;
