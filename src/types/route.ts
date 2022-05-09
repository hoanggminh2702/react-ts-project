import { RootLayoutProps } from "@/layout";
import { FunctionComponent, ReactNode } from "react";
import { RemoveOptionalProperty } from "./util";

export type CustomRoute = {
  key?: string;
  path: string;
  name: string;
  isRoot?: boolean;
  icon?: ReactNode | string;
  layoutLabel?: string;
  layoutElement?: FunctionComponent<any> | FunctionComponent<RootLayoutProps>;
  component?: FunctionComponent;
  children?: Array<CustomRoute>;
  hideChildren?: boolean;
};

export type MyRoute = RemoveOptionalProperty<CustomRoute, "key">;
