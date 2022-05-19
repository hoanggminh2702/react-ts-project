import { RouteWithKey } from "@/models/route";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Layout as AntLayout, PageHeader } from "antd";
import { Footer } from "antd/lib/layout/layout";
import React, { FunctionComponent, useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import BaseMenu from "../components/BaseMenu";
import LayoutFooter from "./LayoutFooter";
import NavMenu from "./NavMenu";
import SocialContact from "./SocialContact";

const { Sider, Content } = AntLayout;

export type RootLayoutProps = {
  routes: RouteWithKey[];
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
      <AntLayout>
        <Content>
          <Outlet />
        </Content>
        <Sider
          collapsible
          collapsed={!showMenu}
          trigger={null}
          theme="dark"
          width={270}
        >
          <div className="menu-wrapper">
            <div onClick={toggleMenu} className="trigger-sider-btn">
              <DoubleRightOutlined
                style={{
                  transform: showMenu ? undefined : "rotate(180deg)",
                }}
              />
            </div>
            <BaseMenu routes={routes as RouteWithKey[]} />
          </div>
        </Sider>
      </AntLayout>
      <Footer>
        <LayoutFooter />
      </Footer>
    </AntLayout>
  );
};

export default Layout;
