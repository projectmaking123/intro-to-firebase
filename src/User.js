import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      print: []
    }

    this.displayUsers = this.displayUsers.bind(this)
  }

  componentWillReceiveProps() {
    this.displayUsers();
    this.setState({print: this.state.messages})
  }

  displayUsers = () => {
    for (var k in this.props.data.messages.user) {
      this.state.messages.push(`${k}: ${Object.values(this.props.data.messages.user[k])}`)
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {
              this.state.messages.map( x =>
                x.split(',').map( y =>
                  <div>{y}</div>
                )
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default User;
