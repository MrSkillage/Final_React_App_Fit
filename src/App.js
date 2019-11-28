import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './Components/Pages/index';

class App extends Component {
  render() {
    return (

      <Router>

        <div className="App">
          <Navbar bg="primary" variant="dark" >
            <Navbar.Brand href="/home">GYM-FIT</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
