import { DesktopOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout as AntLayout, Menu, PageHeader } from "antd";
import React, { useCallback, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import SocialContact from "./SocialContact";

const { Header, Footer, Sider, Content } = AntLayout;

const Layout = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);
  return (
    <AntLayout id="main-layout">
      <PageHeader
        ghost
        title={<h1 className="page-title">Ichi Entertainment</h1>}
        extra={[<SocialContact />, <NavMenu />]}
      ></PageHeader>
      <AntLayout hasSider>
        <Content>
          <Outlet />
        </Content>
        <Sider
          collapsible
          collapsed={!showMenu}
          onCollapse={toggleMenu}
          theme="dark"
          style={{
            height: "100vh",
          }}
        >
          <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<DesktopOutlined />}>
              <Link to="/products">Products</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </AntLayout>
      {/* <Footer>Footer</Footer> */}
    </AntLayout>
  );
};

export default Layout;
