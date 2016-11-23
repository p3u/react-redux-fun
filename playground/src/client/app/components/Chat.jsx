import React from 'react';
import ChatHistory from './ChatHistory.jsx'
import InputBox from './InputBox.jsx'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: this.props.messages};
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(message){
    this.setState((prevState, props) => ({
      messages: prevState.messages.concat([message])
    }));
  }

  render() {
    return (
      <div>
        <ChatHistory messages={this.state.messages} />
        <InputBox sendSubmit={this.addMessage} />
      </div>
    );
  }
}

export default Chat;
