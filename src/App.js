import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todo from './Todo'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Todo} />
      </div>
    </Router>
  );
}

export default App;
