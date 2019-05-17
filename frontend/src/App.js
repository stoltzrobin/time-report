import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import styled from "styled-components";

import "./App.css";
import "antd/dist/antd.css";

import AddTimeContainer from "./containers/AddTimeContainer";
import { MonthReportContainer } from "./containers/MonthReportContainer";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const MenuTitle = styled(Link)`
  color: white;
`;

class App extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>
                  <MenuTitle to={"/"}>Add time</MenuTitle>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>
                  <MenuTitle to="/month">Month Report</MenuTitle>
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Route exact path="/" component={AddTimeContainer} />
                <Route exact path="/month" component={MonthReportContainer} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Time-report ©2018 Created by stoltzrobin
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
