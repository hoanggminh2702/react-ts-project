import NotFound from "@/components/NotFound";
import HomePage from "@/pages/home";
import Products from "@/pages/Products";
import { CustomRoute } from "@/types/route";

export const routes: Array<CustomRoute> = [
  {
    name: "Trang chủ",
    path: "/home",
    component: HomePage,
  },
  {
    name: "Dịch Vụ chụp ảnh",
    key: "photography-services",
    path: "/photography-services",
    component: Products,
    children: [
      {
        name: "Chụp hình Doanh nhân",
        key: "business-man",
        path: "/business-man",
        component: NotFound,
      },
      {
        name: "Chụp hình đồ ăn",
        key: "foody",
        path: "/food",
        component: NotFound,
      },
      {
        name: "Chụp hình kinh doanh đội nhóm",
        key: "team-business",
        path: "/team-business",
        component: NotFound,
      },
      {
        name: "Chụp hình nude & sexy",
        key: "nude-sexy",
        path: "/nude-sexy",
        component: NotFound,
      },
      {
        name: "Chụp hình sản phẩm",
        key: "products",
        path: "/products",
        component: NotFound,
      },
      {
        name: "Quay chụp review Oto",
        key: "car-review",
        path: "/car-review",
        component: NotFound,
      },
      {
        name: "Quay chụp Sự kiện",
        key: "event",
        path: "/event",
        component: NotFound,
      },
    ],
  },
  {
    name: "Dịch vụ Media Marketing",
    key: "media-marketing-services",
    path: "/media-marketing-services",
    component: NotFound
  },
  {
    name: "Cho thuê Studio",
    key: "studio",
    path: "/studio-for-rent",
    component: NotFound
  },
  {
    name: "Cho thuê thiết bị",
    key: "equipments",
    path: "/equipments-for-rent",
    component: NotFound
  },
  {
    name: "Cho thuê nghệ sĩ",
    key: "artist",
    path: "/artists-for-rent",
    component: NotFound
  },
  {
    name: "Báo giá",
    key: "pricing",
    path: "/pricing",
    component: NotFound
  },
  {
    name: "Các bộ sưu tập",
    key: "collections",
    path: "/collections",
    component: NotFound
  },
  {
    name: "Điều khoản",
    key: "terms",
    path: "/terms",
    component: NotFound
  },
  {
    name: "Khuyến mãi",
    key: "promotion",
    path: "/promotion",
    component: NotFound
  },
  {
    name: "Liên hệ",
    key: "contact",
    path: "/contact",
    component: NotFound
  },
];

export const genPath = (route: CustomRoute): CustomRoute => {
  const clonePath = Object.assign({}, route) as CustomRoute;

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

      const returnChild = Object.assign({}, child) as CustomRoute;
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

export const Router = routes.map((child) => {
  return genPath(child);
});
