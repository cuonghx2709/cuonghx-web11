import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    );
  }
}

export default App;
