import { RouteWithKey } from "@/models/route";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import React, { memo, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

// Gen Menu Item using recursive
const genMenuItem = (routes: Array<RouteWithKey> | null[]): ItemType[] => {
  return routes.map((route) => {
    const Icon = route?.icon;
    if (route) {
      if (route.hideInMenu) return null;
      else {
        if (route.children && !route.hideChildren) {
          const returnedChildren = [...route.children] as RouteWithKey[];
          route.component &&
            returnedChildren.unshift({
              ...route,
              children: undefined,
              layoutElement: undefined,
            });
          const returnSubMenu: ItemType = {
            // icon: <FolderOutlined />,
            key: `sub-${route.path}`,
            label: route.component ? (
              <Link to={route.path}>{}</Link>
            ) : (
              route.name
            ),
            children: genMenuItem(returnedChildren as RouteWithKey[]),
          };
          return returnSubMenu;
        } else {
          const returnMenuItem: ItemType = {
            icon: Icon ? <Icon /> : <AppstoreOutlined />,
            label: (
              <Link to={route.path}>{route.layoutLabel || route.name}</Link>
            ),
            key: route.path,
          };
          return returnMenuItem;
        }
      }
    } else return route;
  });
};

const genOpenSubMenuKeysArr = (routes: RouteWithKey[]): string[] => {
  return routes.reduce((totalKeys, curRoute) => {
    if (curRoute.children && !curRoute.defaultCloseChildren) {
      return [
        ...totalKeys,
        `sub-${curRoute.path}`,
        ...genOpenSubMenuKeysArr(curRoute.children as RouteWithKey[]),
      ];
    } else return [...totalKeys];
  }, [] as string[]);
};

type Props = {
  routes: Array<RouteWithKey>;
} & Omit<MenuProps, "defaultOpenKeys" | "selectedKeys">;

const BaseMenu = ({ routes, ...props }: Props) => {
  const items = useMemo(() => {
    return genMenuItem(routes);
  }, [routes]);

  const defaultOpenKeys = useMemo(() => {
    return genOpenSubMenuKeysArr(routes);
  }, [routes]);

  const { pathname } = useLocation();

  const curLocation = useMemo(() => {
    return pathname === "/" ? "" : pathname;
  }, [pathname]);

  // console.log(curLocation);
  return (
    <Menu
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={[curLocation]}
      theme="dark"
      mode="inline"
      items={items}
      {...props}
    />
  );
};

export default memo(BaseMenu);
