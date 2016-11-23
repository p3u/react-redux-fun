import React from 'react';

class Avatar extends React.Component {
  render() {
    return <img src={this.props.imgUrl} />
  }
}

export default Avatar;
