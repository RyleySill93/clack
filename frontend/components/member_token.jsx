import React from 'react';

const MemberToken = (props) => (
  <div id="member-token">
    <img src={props.member.image} width="22px" height="22px" />
    <div id="member-token-name">
      {props.member.username}
    </div>
    <i className="fa fa-times" aria-hidden="true" onClick={props.deselectMember}></i>
  </div>
);

export default MemberToken;
