import { FunctionComponent } from "react";

// Parse Element Props to Genenrics to receive typing when pass props to function
export const ParsePropsFunc = function <Props extends Object = any>(
  props: Props,
  Component: FunctionComponent<Props>
) {
  return () => <Component {...props} />;
};
