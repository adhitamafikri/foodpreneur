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
        <Layout className="App" style={{background: '#fff'}}>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
            <div className="logo" />
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/competition">Competition</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/festival">Festival</Link>
              </Menu.Item>
            </Menu>
          </Header>
          
          <Content className="main">
            <Route exact path="/" component={BigResto} />
            <Route path="/competition" component={Competition} />
            <Route path="/festival" component={Festival} />
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
