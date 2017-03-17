import React from 'react';
import ChatboxContainer from './chatbox_container.js';
import RightSidebarContainer from './right_sidebar_container.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class MainContent extends React.Component {

  render () {
    const sidebarOpen = this.props.router.location.pathname.endsWith('details');
    return (
      <div id="main-content">
        <ChatboxContainer />
        {sidebarOpen ? <RightSidebarContainer /> : ""}
      </div>
    );
  }
}

export default withRouter(MainContent);

// const mapStateToProps = (state, ownProps) => ({
//   ownProps: ownProps,
//   state: state
// });
//
// export default connect (mapStateToProps, null)(MainContent);
