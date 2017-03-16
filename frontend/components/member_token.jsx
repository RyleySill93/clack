import React from 'react';

const MemberToken = (props) => (
  <div id="member-token">
    <img src={'http://res.cloudinary.com/dwqeotsx5/image/upload/v1489538729/icon_jlo9le.png'} width="22px" height="22px" />
    <div id="member-token-name">
      {props.member.username}
    </div>
    <i className="fa fa-times" aria-hidden="true"></i>
  </div>
);

export default MemberToken;
