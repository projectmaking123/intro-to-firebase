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

    auth.onAuthStateChanged(currentUser => {
      this.setState({currentUser})
    })
  }

  handleChange(event) {

  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div>
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
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
