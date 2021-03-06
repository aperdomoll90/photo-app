import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Hello from './components/Hello'
import Photo from './components/Photos'
import './App.global.css';

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" className="button">Home</NavLink>
        <NavLink to="/photo" className="button">Photo</NavLink>
      </nav>
      <Switch>
        <Route path="/photo" component={Photo} />
        <Route exact path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
