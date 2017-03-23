import React from 'react';
import ChannelModalContainer from './channel_modal_container';

class MemberListItem extends React.Component {

  constructor (props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = { modalIsOpen: this.props.modalIsOpen,
                   searchName: "",
                   selectedMembers: [],
                   channelType: "direct",
                   channelName: ""
                  };
  }

  toggleModal () {
    if (this.state.modalIsOpen) {
      this.setState({
        modalIsOpen: false,
        channelName: "",
        searchName: "",
        selectedMembers: [],
        title: []
      });
    } else {
      this.setState({ modalIsOpen: true });
    }
  }

  render () {
    const modal = (
      <ChannelModalContainer modalIsOpen={ this.state.modalIsOpen }
                             channelType={ this.state.channelType }
                             toggleModal={ this.toggleModal }
                             initialMember={ this.props.member }/>
    );

    return (
      <div id="member-list-item" onClick={this.toggleModal}>
        <img src={this.props.member.image} />
        <div id="member-username">{this.props.member.username}</div>
        { (this.state.modalIsOpen) ? modal : "" }
      </div>
    );
  }

}

export default MemberListItem;
