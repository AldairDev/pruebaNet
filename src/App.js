import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home2 from './Home2'
import Home from './home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Link to="/home2">next page</Link>
        </Route>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/home2" component={Home2} />
      </Router>
    </div>
  );
}

export default App;
