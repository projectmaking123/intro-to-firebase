import React, { Component } from 'react';
import { database, auth } from './firebase'
import Messages from './messages'
import SignIn from './SignIn'
import CurrentUser from './CurrentUser'
import User from './User'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      data: null,
      newData: '',
      store: [],
      collection: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
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
      newData: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    database.ref(`/messages/user/${this.state.currentUser.displayName}`).push(`${this.state.currentUser.displayName} ${new Date()}: ${this.state.newData}`)
  }

  render() {
    return (
      <div>
        <section>
          {
            this.state.data &&
            <User data={this.state.data} userName={this.state.currentUser.displayName} />
          }

        </section>

        <div>

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
          <input type="text" value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
