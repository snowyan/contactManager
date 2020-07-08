import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import FilterTable from './components/pages/FilterTable';
import AddContact from './components/contacts/AddContact';
import Tablefilters from './components/tablefilter/Tablefilters';
import Test from './components/test/Test';
import NotFound from './components/pages/NotFound'


import 'bootstrap/dist/css/bootstrap.min.css'

import {Provider} from './context';

import logo from './logo.svg';
import './App.css';

class App extends Component{
    render() {
      return (
        <Provider>
        <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/filtertable" component={FilterTable} />
              <Route exact path="/tablefilters" component={Tablefilters} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
            {/* <AddContact />
            <Contacts /> */}
          </div>  
        </div>
        </Router>
        </Provider>
      );
  }
}

export default App;
