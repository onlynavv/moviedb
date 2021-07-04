import React from 'react'
import './index.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home'
// import Favourites from './Favourites';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
