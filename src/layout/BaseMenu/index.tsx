import { DesktopOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const BaseMenu = (props: Props) => {
  return (
    <Menu defaultSelectedKeys={["1"]} theme="dark">
      <Menu.Item key={"1"} icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key={"2"} icon={<DesktopOutlined />}>
        <Link to="/products">Products</Link>
      </Menu.Item>
    </Menu>
  );
};

export default BaseMenu;
