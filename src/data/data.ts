import { ColumnType } from "antd/lib/table";
import Images from "../assets/images/Images";

export type MovieType = {
  id: number | string;
  name?: string;
  date?: string;
  img: string;
};

export const BinhAn: Array<MovieType> = [
  {
    id: 1,
    img: Images.artistsBinhAn.binhAn1,
  },
  {
    id: 2,
    img: Images.artistsBinhAn.binhAn2,
  },
  {
    id: 3,
    img: Images.artistsBinhAn.binhAn3,
  },
  {
    id: 4,
    img: Images.artistsBinhAn.binhAn4,
  },
  {
    id: 5,
    img: Images.artistsBinhAn.binhAn5,
  },
  {
    id: 6,
    img: Images.artistsBinhAn.binhAn6,
  },
  {
    id: 7,
    img: Images.artistsBinhAn.binhAn7,
  },
];

export const moviesData: Array<MovieType> = [
  {
    id: 1,
    name: "Puss in Boots: The Last Wish",
    date: "In Theaters September 23, 2022",
    img: Images.movies.pussInBoots,
  },

  {
    id: 2,
    name: "Puss in Boots: The Last Wish",
    date: "In Theaters September 23, 2022",
    img: Images.movies.badGuy,
  },

  {
    id: 3,
    name: "Puss in Boots: The Last Wish",
    date: "In Theaters September 23, 2022",
    img: Images.movies.bossBaby,
  },
];

// About Dreamwork
export type AboutDreamworkType = {
  title: string;
  img: string;
};

export const aboutDreamworkData: Array<AboutDreamworkType> = [
  {
    title: "campus",
    img: Images.aboutDreamwork.campus,
  },
  {
    title: "movies",
    img: Images.aboutDreamwork.movies,
  },
  {
    title: "tv",
    img: Images.aboutDreamwork.tv,
  },
  {
    title: "tech",
    img: Images.aboutDreamwork.tech,
  },
];

export const footerData = [
  "Home",
  "Movies",
  "TV Shows",
  "About",
  "Careers",
  "Culture",
  "Classics",
];

// Mock price report table data
type TablePropertyDataType = string | number;

type ColumnsAlias =
  | "option"
  | "free"
  | "shared"
  | "basic"
  | "standard"
  | "premium"
  | "highPerformance";

type DataType = {
  [index in ColumnsAlias]: TablePropertyDataType;
};

type MyColumnType = Omit<ColumnType<DataType>, "dataIndex" | "key"> & {
  dataIndex?: ColumnsAlias;
  key?: MyColumnType["dataIndex"];
};

export const dataSource: DataType[] = [
  {
    option: "Web, mobile, or API apps",
    free: 10,
    shared: 100,
    basic: "Umlimited",
    standard: "Umlimited",
    premium: "Umlimited",
    highPerformance: "Umlimited",
  },
  {
    option: "Disk space",
    free: "1 GB",
    shared: "1 GB",
    basic: "10 GB",
    standard: "50 GB ",
    premium: "25 GB",
    highPerformance: "1 TB",
  },
  {
    option: "Maximum instance",
    free: "-",
    shared: "-",
    basic: "Up to 3",
    standard: "Up to 10",
    premium: "UP to 30*",
    highPerformance: "Up to 100",
  },

  {
    option: "Custom domain",
    free: "-",
    shared: "Supported",
    basic: "Supported",
    standard: "Supported",
    premium: "Supported",
    highPerformance: "Supported",
  },
  {
    option: "Auto Scale",
    free: "-",
    shared: "-",
    basic: "-",
    standard: "Supported",
    premium: "Supported",
    highPerformance: "Supported",
  },
  {
    option: "Hybrid Connectivity",
    free: "-",
    shared: "-",
    basic: "Supported",
    standard: "Supported",
    premium: "Supported",
    highPerformance: "Supported",
  },
];

export const columns: MyColumnType[] = [
  {
    title: "",
    dataIndex: "option",
    key: "option",
  },
  {
    title: "Free Try for Free",
    dataIndex: "free",
    key: "free",
  },
  {
    title: "Shared Environment For Dev Test",
    dataIndex: "shared",
    key: "shared",
  },
  {
    title: "Basic Dedicated environment for dev/test",
    dataIndex: "basic",
    key: "basic",
  },
  {
    title: "Standard Run Production workloads",
    dataIndex: "standard",
    key: "standard",
  },
  {
    title: "Premium Enhanced performance and scale",
    dataIndex: "premium",
    key: "premium",
  },
  {
    title: "Isolated High-Performance Security and Isolation",
    dataIndex: "highPerformance",
    key: "highPerformance",
  },
];
