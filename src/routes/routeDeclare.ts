import NotFound from "@/components/NotFound";
import Profile, { ProfileProps } from "@/components/Profile";
import { moviesData } from "@/data/data";
import { ParsePropsFunc } from "@/hooks/HOC";
import Layout from "@/layout";
import HomePage from "@/pages/home";
import PriceReportPage from "@/pages/price-report/PriceReportPage";
import Products from "@/pages/Products";
import { CustomRoute } from "@/types/route";
import {
  BankOutlined,
  CoffeeOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const routes: Array<CustomRoute> = [
  {
    name: "Trang chủ",
    path: "",
    isRoot: true,
    layoutElement: Layout,
    icon: HomeOutlined,
    component: HomePage,
    children: [
      {
        name: "Dịch Vụ chụp ảnh",
        key: "photography-services",
        path: "/photography-services",
        children: [
          {
            name: "Chụp hình Doanh nhân",
            key: "business-man",
            path: "/business-man",
            icon: BankOutlined,
            component: Products,
          },
          {
            name: "Chụp hình đồ ăn",
            key: "foody",
            path: "/food",
            icon: CoffeeOutlined,
            component: NotFound,
          },
          {
            name: "Chụp hình kinh doanh đội nhóm",
            key: "team-business",
            path: "/team-business",
            permission: true,
            component: Products,
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
        name: "Thông tin cá nhân",
        key: "profile",
        path: "/profile",
        icon: UserOutlined,
        component: ParsePropsFunc<ProfileProps>(
          {
            nickName: "Binh An",
            name: "Binh An",
            images: moviesData,
            dateOfBirth: "1999.01.01",
          },
          Profile
        ),
      },
      {
        name: "Dịch vụ Media Marketing",
        key: "media-marketing-services",
        path: "/media-marketing-services",
        component: NotFound,
      },
      {
        name: "Cho thuê Studio",
        key: "studio",
        path: "/studio-for-rent",
        component: NotFound,
      },
      {
        name: "Cho thuê thiết bị",
        key: "equipments",
        path: "/equipments-for-rent",
        component: NotFound,
      },
      {
        name: "Cho thuê nghệ sĩ",
        key: "artist",
        path: "/artists-for-rent",
        component: NotFound,
      },
      {
        name: "Báo giá",
        key: "pricing",
        path: "/pricing",
        component: PriceReportPage,
      },
      {
        name: "Các bộ sưu tập",
        key: "collections",
        path: "/collections",
        component: NotFound,
      },
      {
        name: "Điều khoản",
        key: "terms",
        path: "/terms",
        component: NotFound,
      },
      {
        name: "Khuyến mãi",
        key: "promotion",
        path: "/promotion",
        component: NotFound,
      },
      {
        name: "Liên hệ",
        key: "contact",
        path: "/contact",
        component: NotFound,
      },
    ],
  },
];
