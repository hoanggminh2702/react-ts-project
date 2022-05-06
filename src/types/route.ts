export type CustomRoute = {
  key?: string;
  path: string;
  name: string;
  children?: Array<CustomRoute>;
};
