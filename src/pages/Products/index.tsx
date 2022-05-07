import PriceReportCardTable from "@/components/PriceReportCardTable";
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
      <PriceReportCardTable />
    </div>
  );
};

export default Products;
