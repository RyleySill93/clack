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
    transform             : 'translate(-50%, -50%)'
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
    this.afterOpenModal = this.afterOpenModal.bind(this);
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
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.state.modalType === 'Login') {
      this.props.login({username: this.state.username, password: this.state.password})
        .then(() => hashHistory.push('/messages/1'));
    } else {
      this.props.signup({username: this.state.username, password: this.state.password})
      .then(() => hashHistory.push('/messages/1'));
    }
  }

  handleClick (e) {
    e.preventDefault();
    if (e.target.id === 'login') {
      // hashHistory.push("/login");
      this.state.modalType = 'Login';
      this.openModal();
    } else {
      // hashHistory.push("/signup");
      this.state.modalType = 'Sign Up';
      this.openModal();
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    const log = (
      <Link to="/">Log In</Link>
    );

    const sign = (
      <Link to="/">Sign Up</Link>
    );

    return (
      <header id="splash-header">
        <img id="logo" src={'http://res.cloudinary.com/dwqeotsx5/image/upload/v1489542773/clack_monochrome_white_n5w0fo.png'} height="68px" />
        <nav id="login-signup">
          <button onClick={this.handleClick} id="login">Login</button>
          <button onClick={this.handleClick} id="signup">Sign up</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal">

            <div>
              <h1>{this.state.modalType}</h1>
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
            </div>
          </Modal>
        </nav>
      </header>
    );
  }
}

export default withRouter(SessionForm);
