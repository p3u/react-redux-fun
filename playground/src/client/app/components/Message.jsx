import React from 'react';
import Avatar from './Avatar.jsx';
import MsgBubble from './MsgBubble.jsx';

class Message extends React.Component {
  render() {
    return (
      <div>
        <Avatar imgUrl={this.props.sender.imgUrl} />
        <MsgBubble content={this.props.content} />
      </div>
    );
  }
}

export default Message;
