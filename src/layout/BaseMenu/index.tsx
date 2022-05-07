import { MyRoute } from "@/types/route";
import { Menu } from "antd";
import { MenuItemType, SubMenuType } from "rc-menu/lib/interface";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  routes: Array<MyRoute>;
};

// Gen Menu Item using recursive
const genMenuItem = (
  routes: Array<MyRoute>
): MenuItemType[] | SubMenuType[] => {
  return routes.map((route) => {
    if (route.children) {
      const returnSubMenu: SubMenuType = {
        key: `sub-${route.key}`,
        label: <Link to={route.path}>{route.name}</Link>,
        children: genMenuItem(route.children as MyRoute[]),
      };
      return returnSubMenu;
    }

    const returnMenuItem: MenuItemType = {
      label: <Link to={route.path}>{route.name}</Link>,
      key: route.key,
    };
    return returnMenuItem;
  });
};

const BaseMenu = ({ routes }: Props) => {
  return (
    <Menu
      defaultOpenKeys={["sub-services"]}
      theme="dark"
      mode="inline"
      items={genMenuItem(routes)}
      defaultActiveFirst
    />
  );
};

export default BaseMenu;
