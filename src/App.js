import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Drawer, Button } from 'antd'
import 'antd/dist/antd.css';

import Navigation from './components/Navigation';
import LeftMenu from './components/LeftMenu';
import Competition from './components/Page/Competition';
import Festival from './components/Page/Festival';
import BigResto from './components/Page/BigResto';
import './components/stylesheets/main.scss';

const {
  Header, Content
} = Layout;

class App extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <BrowserRouter>
        <Layout className="App" style={{ background: '#fff' }}>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
            <Navigation />
            <Button className="barsMenu d-lg-none" 
            type="default" 
            onClick={this.showDrawer} 
            icon="menu-fold" size="large"></Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
            </Drawer>
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
