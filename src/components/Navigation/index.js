import React from 'react';
import {
  NavLink,
  Link,
  withRouter
} from 'react-router-dom';
import {
  Menu,
  BackTop
} from 'antd'
import PropTypes from "prop-types";
import StyledNavigation from './style';

class NavigationMenu extends React.Component {

  scrollTop () {
    window.scrollTo(0, 0);
  }
  render() {
    const { location } = this.props;

    return (
      <Menu
        theme="light"
        mode="horizontal"
        className="d-none d-md-none d-lg-block"
        selectedKeys={[location.pathname]}
        style={{ lineHeight: '63px' }}
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
const Navigation = withRouter(NavigationMenu);

export default Navigation;
