import React from 'react';

class InputBox extends React.Component {
  constructor(props){
      super(props);
      this.state = {text: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({text: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({text: ''});
    let message = {
                    content: this.state.text,
                    sender: {
                             name:"Pedro",
                             imgUrl: "http://www.pcgamesn.com/sites/all/themes/pcgamesn/images/icons/default-silo.png"
                            }
                  }
    return this.props.sendSubmit(message)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='...' type='text' value={this.state.text} onChange={this.handleChange} />
        <button type='submit' />
      </form>
    );
  }
}

export default InputBox;
