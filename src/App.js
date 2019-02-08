import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Competition from './components/Page/Competition';
import Festival from './components/Page/Festival';
import BigResto from './components/Page/BigResto';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Festival} />
          <Route exact path="/competition" component={Competition} />
          <Route exact path="/big-resto" component={BigResto} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
