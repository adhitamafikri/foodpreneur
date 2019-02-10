import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd'
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
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
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
