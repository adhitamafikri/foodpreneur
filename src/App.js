import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
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
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><NavLink to="/">Nav1</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/competition">Nav2</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to="/big-resto">Nav1</NavLink></Menu.Item>
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
