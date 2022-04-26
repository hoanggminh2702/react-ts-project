import { DesktopOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout as AntLayout, Menu } from "antd";
import React, { useCallback, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const { Header, Footer, Sider, Content } = AntLayout;

const Layout = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);
  return (
    <AntLayout>
      <Header>Header</Header>
      <AntLayout>
        <Content>
          <Outlet />
        </Content>
        <Sider
          collapsible
          collapsed={!showMenu}
          onCollapse={toggleMenu}
          theme="light"
          style={{
            paddingBottom: 64,
            height: "calc(100vh - 64px)",
          }}
        >
          <Menu>
            <Menu.Item icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<DesktopOutlined />}>
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
