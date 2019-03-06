import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import accueil from './Component/accueil'
import apropos from './Component/apropos'
import contact from './Component/contact'
import Footer from './Component/Footer'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <nav class="pa">
        <ul>
          <li>
            <Link to="/accueil">Accueil</Link>
          </li>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
        <hr />
        <div><Route path="/" exact component={accueil} /></div>
        <Route path="/accueil" component={accueil} />
        <Route path="/apropos" component={apropos} />
        <Route path="/contact" component={contact} />
        <hr/>
        <div class="d"><Footer /></div>
      </div>
    </Router>
    );
  }
}

export default App;
