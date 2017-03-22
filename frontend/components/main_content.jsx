import React from 'react';
import ChatboxContainer from './chatbox_container.js';
import RightSidebarContainer from './right_sidebar_container.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MyEmojiInput from './emoji_test';

class MainContent extends React.Component {

  render () {
    const sidebarOpen = this.props.router.location.pathname.endsWith('details');
    const footer = document.getElementById("footer");
    const footerSmall = document.getElementById("footer-small");
    if (sidebarOpen && footer) {
      footer.id = "footer-small";
    } else if (!sidebarOpen && footerSmall) {
      footerSmall.id = "footer";
    }

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
