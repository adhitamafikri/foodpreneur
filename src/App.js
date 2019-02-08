import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

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
          <Route path="/competition" component={Competition} />
          <Route path="/big-resto" component={BigResto} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
