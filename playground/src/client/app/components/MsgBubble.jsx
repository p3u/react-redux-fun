import React from 'react';

class MsgBubble extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default MsgBubble;
