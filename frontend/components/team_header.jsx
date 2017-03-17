import React from 'react';

class TeamHeader extends React.Component {

  constructor (props) {
    super(props);
    this.openUserModal = this.openUserModal.bind(this);
  }

  openUserModal (e) {
    e.preventDefault();
  }

  render () {
    return (
      <div id="team-header" onClick={ this.openUserModal }>
        <div id="team-name">
          <div>App Academy</div>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div id="current-user">
          <div id="active-icon">
            <div id="online">
            </div>
          </div>
          <div id="current-user-name">
            {this.props.currentUser}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamHeader;
