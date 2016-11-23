import React from 'react';
import Message from './Message.jsx'

class ChatHistory extends React.Component {
  render() {
    let messages = this.props.messages.map(
                    (msg, index) => <Message content={msg.content}
                                    sender={msg.sender}
                                    key={index}/>
                   );
    return <div> {messages} </div>;
  }
}

export default ChatHistory;
