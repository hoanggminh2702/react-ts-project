import { FunctionComponent, ReactNode } from "react";
import { RemoveOptionalProperty } from "./util";

export type CustomRoute = {
  key?: string;
  path: string;
  name: string;
  icon?: ReactNode | string;
  layoutElement?: FunctionComponent;
  component: FunctionComponent;
  children?: Array<CustomRoute>;
};

export type MyRoute = RemoveOptionalProperty<CustomRoute, "key">;
