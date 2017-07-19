import React, { Component } from 'react';
import { database, auth } from './firebase'
import SignIn from './SignIn'
import CurrentUser from './CurrentUser'
import './App.css';
import map from 'lodash/map'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      data: null,
      message: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    database.ref('/messages').on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
    auth.onAuthStateChanged(currentUser => {
      this.setState({currentUser})
    })
  }

  handleChange(event) {
    this.setState({
      message: [`${this.state.currentUser.displayName}`, event.target.value],
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    database.ref(`/messages/${new Date()}`).set(this.state.message)
  }

  render() {
    return (
      <div>
        <div>
          {
            map(this.state.data, (value, key) =>
              <p key={key}> {value[0]} : {value[1]} </p>
            )
          }
        </div>

        <div>
          {
            !this.state.currentUser && <SignIn />
          }
          {
            this.state.currentUser && <CurrentUser user={this.state.currentUser} />
          }
        </div>
        <pre>
          {
            JSON.stringify(
              this.state.data
              , null, 2)

          }

        </pre>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.message[1]} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
