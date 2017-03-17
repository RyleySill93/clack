import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '615px',
    height                 : '385px'
  }
};

class SessionForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = { username: "", password: "", modalIsOpen: false, modalType: 'Login' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    if (e) {
      e.preventDefault();
    }
    const user = Object.assign({}, this.state);
    if (this.state.modalType === 'Sign Up') {
      this.props.signup({username: this.state.username, password: this.state.password})
      .then(() => hashHistory.push('/messages/1'));
    } else {
      this.props.login({username: this.state.username, password: this.state.password})
        .then(() => hashHistory.push('/messages/1'));
    }
  }

  handleClick (e) {
    e.preventDefault();
    if (e.target.id === 'login') {
      this.state.modalType = 'Login';
      this.openModal();
    } else if (e.target.id === 'signup') {
      this.state.modalType = 'Sign Up';
      this.openModal();
    } else {
      this.state.modalType = 'Demo Login';
      this.setState({username: 'hellohi', password: 'hellohi'});
      this.openModal();
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    const log = <Link to="/">Log In</Link>;
    const sign = <Link to="/">Sign Up</Link>;
    let errors = this.props.errors.map((error) => (
      <li>
        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>&nbsp;
        {error}
      </li>));


    return (
      <header id="splash-header">
        <img id="logo" src={'http://res.cloudinary.com/dwqeotsx5/image/upload/v1489542773/clack_monochrome_white_n5w0fo.png'} height="68px" />
        <nav id="login-signup">
          <button onClick={this.handleClick} id="login">Login</button>
          <button onClick={this.handleClick} id="signup">Sign up</button>
          <button onClick={this.handleClick} id="demo">Demo</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal">

            <div id="login-modal">
              <form id="login-form" onSubmit={this.handleSubmit}>
                <h1>{this.state.modalType}</h1>
                <p>Enter your <b>username</b> and <b>password</b>.</p>
                <input type="text"
                       onChange={this.handleChange}
                       id="username"
                       placeholder="Username"></input>
                     <input type="password"
                       onChange={this.handleChange}
                       id="password"
                       placeholder="Password"></input>
                     <input id="login-button" type="submit" value={this.state.modalType}></input>
                     <ul id="login-errors">{errors}</ul>
              </form>
            </div>
          </Modal>
        </nav>
      </header>
    );
  }
}

export default withRouter(SessionForm);
