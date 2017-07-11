import React, { Component } from 'react';
import { database } from './firebase'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      newData: ''
    }

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>

        </h1>
        <pre>

        </pre>
      </div>
    );
  }
}

export default App;
