import React from 'react';

const MemberListItem = (props) => (
  <div id="member-list-item">
    <img src={props.member.image} />
    <div id="member-username">{props.member.username}</div>
  </div>
);

export default MemberListItem;
