import RequiredAuth from "@/components/auth/";
import NotFound from "@/components/NotFound";
import { RouteWithKey } from "@/models/route";
import React, { FunctionComponent, ReactNode, ReactNodeArray } from "react";
import {
  LayoutRouteProps,
  Outlet,
  PathRouteProps,
  Route,
  Routes,
} from "react-router-dom";
import { menuItem } from "./routes";

export const generateRoutes = (routes: RouteWithKey[]): ReactNodeArray => {
  return routes.map((route) => {
    if (route.children) {
      return generateRoute({
        route,
        children: generateRoutes(route.children as RouteWithKey[]),
      });
    }
    return generateRoute({ route });
  });
};

type GenerateRouteProp = (
  | Omit<PathRouteProps, "element" | "path" | "children">
  | Omit<LayoutRouteProps, "element" | "path" | "children">
) & {
  route: RouteWithKey;
  children?: ReactNode;
};

export const generateRoute = ({
  route,
  children,
  ...props
}: GenerateRouteProp): ReactNodeArray => {
  const Component = route.component;

  console.log(location);
  if (route.children && !route.layoutElement) {
    return [
      <Route path={route.path} element={<Outlet />} {...props}>
        {Component && <Route index element={<Component />} />}
        {children && children}
      </Route>,
    ];
  } else if (route.children && route.layoutElement) {
    const LayoutComponent = route.layoutElement;
    let Layout = null;

    if (route.isRoot) {
      // Pass routes to children to gen menu item with root element
      const passRoutes: RouteWithKey[] = [
        ...(route.children as RouteWithKey[]),
      ];
      passRoutes.unshift({
        ...route,
        children: undefined,
        isRoot: undefined,
        layoutElement: undefined,
      });
      Layout = () => <LayoutComponent routes={passRoutes as RouteWithKey[]} />;
    } else {
      Layout = route.layoutElement as FunctionComponent;
    }
    return [
      <Route path={route.path} element={<Layout />} {...props}>
        {Component && <Route index element={<Component />} />}
        {children && children}
      </Route>,
    ];
  }
  return [
    <Route
      path={route.path}
      element={
        Component ? (
          route.permission ? (
            <RequiredAuth isLogin={false}>
              <Component />
            </RequiredAuth>
          ) : (
            <Component />
          )
        ) : (
          <NotFound />
        )
      }
    />,
  ];
};

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} /> {generateRoutes(menuItem)}
    </Routes>
  );
};
