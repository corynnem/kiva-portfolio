import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About'
import Welcome from './Components/Welcome';
import Contact from './Components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
         <Switch>
           <Route path='/contact'>
            <Contact/>
          </Route> 
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/'>
          <Welcome/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
