import React from "react";

import { Router, Link } from "@reach/router";
import { Layout, Menu } from "antd";

import List from "./List";
import Create from "./Create";
import Comments from "./Comments";

import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["3"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/">List Posts</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/create">Create Posts</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/comments">Add Comments</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 100 }}>
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 380,
              marginTop: "16px"
            }}
          >
            <Router>
              <Comments path="/comments" />
              <Create path="/create" />
              <List path="/" />
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Github Manager by Christopher Lam
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
