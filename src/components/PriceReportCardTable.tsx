import { Table } from "antd";
import { CardTabListType } from "antd/lib/card";
import { ColumnType } from "antd/lib/table";
import React, { useCallback, useState } from "react";
import CardFixBarInk from "./CardFixBarInk";

type Props = {};

type TabKey = "windows" | "linux" | "kali" | "maxos";

type TabType = Capitalize<TabKey>;

type TabListType = CardTabListType & {
  key: TabKey;
};

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

const PriceReportCardTable = (props: Props) => {
  const [curTab, setCurTab] = useState<TabKey>("windows");

  const tabList: TabListType[] = [
    {
      key: "windows",
      tab: "Windows",
    },
    {
      key: "linux",
      tab: "Linux",
    },
    {
      key: "kali",
      tab: "Kali",
    },
    {
      key: "maxos",
      tab: "Max Os",
    },
  ];

  const dataSource: DataType[] = [
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

  const columns: MyColumnType[] = [
    {
      title: <></>,
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

  const handleTabChange = useCallback((key: string) => {
    setCurTab(key as TabKey);
  }, []);

  return (
    <CardFixBarInk
      id="price-report-card-table"
      className="price-report-card-table"
      onTabChange={handleTabChange}
      activeTabKey={curTab}
      tabBarExtraContent={<a href="#">More</a>}
      tabList={tabList}
    >
      <Table dataSource={dataSource} columns={columns} />
    </CardFixBarInk>
  );
};

export default PriceReportCardTable;
