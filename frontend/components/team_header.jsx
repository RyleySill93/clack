import React from 'react';

const TeamHeader = (props) => (
  <div id="team-header">
    <div id="team-name">
      App Academy
    </div>
    <div id="current-user">
      <div id="active-icon">
        <div id="online">
        </div>
      </div>
      <div id="current-user-name">
        {props.currentUser}
      </div>
    </div>
  </div>
);

export default TeamHeader;
