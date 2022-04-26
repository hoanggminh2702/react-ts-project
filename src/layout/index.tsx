import { Layout as AntLayout, Menu } from "antd";
import React, { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

const { Header, Footer, Sider, Content } = AntLayout;

const Layout = ({ children }: Props) => {
  return (
    <AntLayout>
      <Header>Header</Header>
      <AntLayout>
        <Content>
          <Outlet />
        </Content>
        <Sider
          theme="light"
          style={{
            paddingBottom: 64,
            height: "calc(100vh - 64px)",
          }}
        >
          <Menu>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/products">Products</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </AntLayout>
      <Footer>Footer</Footer>
    </AntLayout>
  );
};

export default Layout;
