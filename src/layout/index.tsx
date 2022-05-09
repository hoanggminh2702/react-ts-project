import { MyRoute } from "@/types/route";
import { Layout as AntLayout, PageHeader } from "antd";
import { Footer } from "antd/lib/layout/layout";
import React, { FunctionComponent, useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import BaseMenu from "./BaseMenu";
import LayoutFooter from "./LayoutFooter";
import NavMenu from "./NavMenu";
import SocialContact from "./SocialContact";

const { Sider, Content } = AntLayout;

export type RootLayoutProps = {
  routes: MyRoute[];
};

type LayoutProps = RootLayoutProps;

const Layout: FunctionComponent<LayoutProps> = ({ routes }: LayoutProps) => {
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
          trigger={null}
          theme="dark"
          style={{
            minHeight: "100vh",
          }}
        >
          <BaseMenu routes={routes as MyRoute[]} />
        </Sider>
      </AntLayout>
      <Footer hasSider>
        <LayoutFooter />
      </Footer>
    </AntLayout>
  );
};

export default Layout;
