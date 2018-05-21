import React, { Component } from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from './axios'

class App extends Component {

  state = {
    images: []
  }
  // state thay doi => render thay doi

  componentDidMount() { //auto called
    axios.get('api/images')
    .then(data => this.setState({images: data.data})) // thay doi roi goi render
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    );
  }
}

export default App;
