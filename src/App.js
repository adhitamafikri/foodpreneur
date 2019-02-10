import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css';

import Navigation from './components/Navigation';
import Competition from './components/Page/Competition';
import Festival from './components/Page/Festival';
import BigResto from './components/Page/BigResto';

import './components/stylesheets/main.scss';

const {
  Header, Content
} = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className="App">
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
            <div className="logo" />
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">Festival</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/competition">Competition</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/big-resto">Big Resto</Link>
              </Menu.Item>
            </Menu>
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
