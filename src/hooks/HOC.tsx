import { FunctionComponent } from "react";

export const ParsePropsFunc = function <Props extends Object = any>(
  props: Props,
  Component: FunctionComponent<Props>
) {
  return () => <Component {...props} />;
};
