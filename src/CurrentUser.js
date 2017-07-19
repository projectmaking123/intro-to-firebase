import React, { Component } from 'react';
import { auth } from './firebase'

class CurrentUser extends Component {

  render() {
    return (
      <div>
        <div>UserName: {this.props.user.displayName}</div>
      <div>
        <img
          src={this.props.user.photoURL}
          style={{height: '200px'}}
        />
        <button onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
    );
  }
}

export default CurrentUser;
