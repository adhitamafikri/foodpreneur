import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd'
import 'antd/dist/antd.css';

import Navigation from './components/Navigation';
import Competition from './components/Page/Competition';
import Festival from './components/Page/Festival';
import BigResto from './components/Page/BigResto';

import './components/stylesheets/main.scss';
import './components/stylesheets/header.scss';

const {
  Header, Content
} = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className="App">
          <Header className="header" >
            <h1>Header</h1>
          </Header>
          <Content className="main">
            <Navigation />
            <Route exact path="/" component={Festival} />
            <Route path="/competition" component={Competition} />
            <Route path="/big-resto" component={BigResto} />
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
