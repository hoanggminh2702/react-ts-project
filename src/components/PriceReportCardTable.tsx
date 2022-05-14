import { Table } from "antd";
import { CardTabListType } from "antd/lib/card";
import { ColumnsType } from "antd/lib/table";
import React, { useCallback, useState } from "react";
import CardFixBarInk from "./CardFixBarInk";

type TabKey = "windows" | "linux" | "kali" | "maxos";

type TabType = Capitalize<TabKey>;

type TabListType = CardTabListType & {
  key: TabKey;
};

type PriceReportCardTableProps = {
  dataSource?: any[];
  columns?: ColumnsType<any>;
};

const PriceReportCardTable = ({
  dataSource = [],
  columns = [],
}: PriceReportCardTableProps) => {
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
