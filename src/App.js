import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd'
import 'antd/dist/antd.css';

import Navigation from './components/Navigation';
import Competition from './components/Page/Competition';
import Festival from './components/Page/Festival';
import BigResto from './components/Page/BigResto';

import HeaderStyles from './components/styles/HeaderStyles';
import ContentStyles from './components/styles/ContentStyles';

const {
  Header, Content
} = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className="App">
          <Header style={HeaderStyles} >
            <h1>Header</h1>
          </Header>
          <Content style={ContentStyles}>
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
