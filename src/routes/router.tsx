import { MyRoute } from "@/types/route";
import React, { ReactNode, ReactNodeArray } from "react";
import {
  LayoutRouteProps,
  Outlet,
  PathRouteProps,
  Route,
} from "react-router-dom";

export const generateRoutes = (routes: MyRoute[]): ReactNodeArray => {
  return routes.map((route) => {
    if (route.children) {
      return generateRoute({
        route,
        children: generateRoutes(route.children as MyRoute[]),
      });
    }
    return generateRoute({ route });
  });
};

type GenerateRouteProp = (PathRouteProps | LayoutRouteProps) & {
  route: MyRoute;
  children?: ReactNode;
};

export const generateRoute = ({
  route,
  ...props
}: GenerateRouteProp): ReactNodeArray => {
  const Component = route.component;
  if (route.children && !route.layoutElement) {
    return [
      <Route path={route.path} element={<Outlet />} {...props}>
        <Route index element={<Component />} />
        {(props as LayoutRouteProps).children && props.children}
      </Route>,
    ];
  } else if (route.children && route.layoutElement) {
    const Layout = route.layoutElement;
    return [
      <Route path={route.path} element={<Layout />} {...props}>
        <Route index element={<Component />} />
        {(props as LayoutRouteProps).children && props.children}
      </Route>,
    ];
  }
  return [
    <Route path={route.path} element={<Component />}>
      {(props as LayoutRouteProps).children && props.children}
    </Route>,
  ];
};
