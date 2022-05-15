import RequiredAuth from "@/auth/RequiredAuth";
import NotFound from "@/components/NotFound";
import { MyRoute } from "@/types/route";
import React, { FunctionComponent, ReactNode, ReactNodeArray } from "react";
import {
  LayoutRouteProps,
  Outlet,
  PathRouteProps,
  Route,
  Routes,
} from "react-router-dom";
import { menuItem } from "./routes";

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

type GenerateRouteProp = (
  | Omit<PathRouteProps, "element" | "path" | "children">
  | Omit<LayoutRouteProps, "element" | "path" | "children">
) & {
  route: MyRoute;
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
      const passRoutes: MyRoute[] = [...(route.children as MyRoute[])];
      passRoutes.unshift({
        ...route,
        children: undefined,
        isRoot: undefined,
        layoutElement: undefined,
      });
      Layout = () => <LayoutComponent routes={passRoutes as MyRoute[]} />;
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
