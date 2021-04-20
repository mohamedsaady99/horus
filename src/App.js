import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route ,BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Index from './Components/Index/Index';
import Bus from './Components/Bus/Bus';
import Contact from './Components/Contact/Contact';
import Flight from './Components/Flight/Flight';
import Hotels from './Components/Hotels/Hotels';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends Component {
      state={}
      render(){
        return (
          <BrowserRouter className="App">
            <NavBar/>
            <Route exact path="/" component={Index}/> 
            <Route exact path="/about" component={About}/>
            <Route exact path="/bus" component={Bus}/>
            <Route exact path="/flight" component={Flight}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/hotels" component={Hotels}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </BrowserRouter>
        );
      }
    }

export default App;
