import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "./axios";

import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import HomeScreen from "./containers/HomeScreen";

import {BrowserRouter, Route} from "react-router-dom"

class App extends Component {
  
  state ={
    
  }

  _onlogin = () => {
    console.log("login")
    axios
      .post('api/auth', {
        username: "admin",
        password: "123456"
      })
      .then(response => {
        console.log(response.data)
        this.setState({
          username: response.data.username,
          id: response.data.id 
        })
        this.render()
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      
      // <BrowserRouter>
      // <div className="App">
      //   <Route exact path ="/" component = {HomeScreen}/>
      //   <Route exact path = "/cuonghx" component = {NavBar}/>
      // </div>
      // </BrowserRouter>

      <BrowserRouter>
      <div className="App">
        <Route exact path ="/" render = {props => {
         return <HomeScreen  {...props} username = {this.state.username}/>
        }}/>
        <Route exact path = "/cuonghx" component = {NavBar}/>
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
