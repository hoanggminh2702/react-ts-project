import PriceReportCardTable from "@/components/PriceReportCardTable";
import { columns, dataSource } from "@/data/data";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <div
      className="table-card-container"
      style={{
        width: 1200,
      }}
    >
      <PriceReportCardTable dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Products;
