import { CustomRoute } from "@/types/route";

export const routes: Array<CustomRoute> = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Products",
    path: "/products",
  },
];

export const genPath = (route: CustomRoute): CustomRoute => {
  const clonePath = JSON.parse(JSON.stringify(route)) as CustomRoute;

  // Gen key if route does not have key
  const parKey = clonePath.key || clonePath.name.toLocaleLowerCase();
  clonePath.key = parKey;

  // If route has children gen new children with new path
  if (clonePath.children) {
    const newChildren = clonePath.children.map((child) => {
      // Gen new path and key to children
      const childPath = route.path + child.path;
      const childKey = child.key
        ? `${parKey}-${child.key}`
        : `${parKey}-${child.name.toLocaleLowerCase()}`;

      const returnChild = JSON.parse(JSON.stringify(child)) as CustomRoute;
      returnChild.path = childPath;
      returnChild.key = childKey;

      // De quy de thuc hien gen path cho children khac
      if (returnChild.children) {
        return genPath(returnChild);
      } else return returnChild;
    });

    return {
      ...clonePath,
      children: newChildren,
    };
  }
  return {
    ...clonePath,
  };
};
