import React from 'react';

const MemberListItem = (props) => (
  <div id="member-list-item">
    <img src='http://res.cloudinary.com/dwqeotsx5/image/upload/v1489538729/icon_jlo9le.png' />
    <div id="member-username">{props.member.username}</div>
  </div>
);

export default MemberListItem;
