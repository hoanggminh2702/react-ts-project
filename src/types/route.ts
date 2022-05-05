import { ReactNode } from "react";

export type CustomRoute = {
  key?: string;
  path?: string;
  name: string;
  icon?: ReactNode | string;
  children?: CustomRoute;
};
