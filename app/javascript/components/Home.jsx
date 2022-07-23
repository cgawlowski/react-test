import { Layout } from "antd";
import React from "react";
import Events from "./Events";
import Header from "./Header";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Event list</h1>
        <Events />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>Kumojin ©2022.</Footer>
  </Layout>
);
