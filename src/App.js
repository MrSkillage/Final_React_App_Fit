import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Create, Homepage } from './Components/Pages/index';
import Edit from './Components/Pages/Edit';

/*  Uses a BrowserRouter, Navbar and Switch to alternated between paages via the navbar at the top of the window
*/
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
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path='/home' component={Homepage} />
            <Route path='/create' component={Create} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
