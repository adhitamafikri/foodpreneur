import React, { Component } from 'react';
import { Menu } from 'antd';
import {
  NavLink,
  Link,
  withRouter
} from 'react-router-dom';
class LeftMenu extends Component {
  scrollTop () {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Menu
        theme="light"
        mode="inline"
        onClick={this.scrollTop}
       >
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/competition">
        <Link to="/competition">Competition</Link>
      </Menu.Item>
      <Menu.Item key="/festival">
        <Link to="/festival">Festival</Link>
      </Menu.Item>
    </Menu>
    );
  }
}
export default LeftMenu;