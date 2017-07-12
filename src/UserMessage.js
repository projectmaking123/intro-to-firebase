import React, { Component } from 'react';

class UserMessage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
    <div>
      {
        this.props.msg
      }
    </div>
    );
  }
}

export default UserMessage;
