import { MyRoute } from "@/types/route";
import { Menu } from "antd";
import { MenuItemType, SubMenuType } from "rc-menu/lib/interface";
import React, { memo, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  routes: Array<MyRoute>;
};

// Gen Menu Item using recursive
const genMenuItem = (
  routes: Array<MyRoute>
): MenuItemType[] | SubMenuType[] => {
  return routes.map((route) => {
    if (route.children) {
      const returnedChildren = [...route.children] as MyRoute[];
      route.component &&
        returnedChildren.unshift({
          ...route,
          children: undefined,
          layoutElement: undefined,
        });
      const returnSubMenu: SubMenuType = {
        key: `sub-${route.path}`,
        label: <Link to={route.path}>{route.name}</Link>,
        children: genMenuItem(returnedChildren as MyRoute[]),
      };
      return returnSubMenu;
    }

    const returnMenuItem: MenuItemType = {
      label: <Link to={route.path}>{route.layoutLabel || route.name}</Link>,
      key: route.path,
    };
    return returnMenuItem;
  });
};

const genOpenSubMenuKeysArr = (routes: MyRoute[]): string[] => {
  return routes.reduce((totalKeys, curRoute) => {
    if (curRoute.children && !curRoute.hideChildren) {
      return [
        ...totalKeys,
        `sub-${curRoute.path}`,
        ...genOpenSubMenuKeysArr(curRoute.children as MyRoute[]),
      ];
    } else return [...totalKeys];
  }, [] as string[]);
};

const BaseMenu = ({ routes }: Props) => {
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

  console.log(curLocation);
  return (
    <Menu
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={[curLocation]}
      theme="dark"
      mode="inline"
      items={items}
      defaultActiveFirst
    />
  );
};

export default memo(BaseMenu);
