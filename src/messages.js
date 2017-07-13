import React, { Component } from 'react';
import UserMessage from './UserMessage'

class Messages extends Component {
  constructor(props) {
    super(props)
  } 

  componentDidMount() {
    console.log(this.props.msg);
  }

  render() {
    return (
      <div>
        <div>
          {
            Object.values(this.props.msg)
          }
        </div>
      </div>
    );
  }
}

export default Messages;

// {
//   this.props.data.map(msg => (
//     <UserMessage  msg={msg} />
//   ))
// }
