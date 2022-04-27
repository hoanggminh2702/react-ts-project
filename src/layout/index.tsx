import { DesktopOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout as AntLayout, Menu, PageHeader } from "antd";
import React, { useCallback, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import SocialContact from "./SocialContact";

const { Sider, Content } = AntLayout;

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
        extra={[
          <SocialContact key={"social-contact"} />,
          <NavMenu key={"nav-menu"} />,
        ]}
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
            minHeight: "100vh",
          }}
        >
          <Menu defaultSelectedKeys={["1"]} theme="dark">
            <Menu.Item key={"1"} icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key={"2"} icon={<DesktopOutlined />}>
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
