import PriceReportCardTable from "@/components/PriceReportCardTable";
import {
  chupHinhDoAnColumn,
  chupHinhDoAnData,
  chupHinhDoanhNhanColumn,
  chupHinhDoanhNhanData,
  chupHinhReviewOtoColumn,
  chupHinhReviewOtoData,
  chupHinhSanPhamColumn,
  chupHinhSanPhamData,
  chupHinhSexyColumn,
  chupHinhSexyData,
  chupHinhSuKienColumn,
  chupHinhSuKienData,
  quayReviewOtoColumn,
  quayReviewOtoData,
} from "@/data/price-data";
import { Anchor } from "antd";
import React from "react";

const { Link } = Anchor;

type Props = {};

const PriceReportPage = (props: Props) => {
  return (
    <div className="price-report-container">
      <div className="table-container">
        {/* Chụp hình doanh nhân */}
        <h2 className="anchor-title" id="chup-hinh-doanh-nhan">
          Chụp hình doanh nhân
        </h2>
        <PriceReportCardTable
          dataSource={chupHinhDoanhNhanData}
          columns={chupHinhDoanhNhanColumn}
        />

        {/* Chụp hình đồ ăn */}
        <h2 className="anchor-title" id="chup-hinh-do-an">
          Chụp hình đồ ăn
        </h2>
        <PriceReportCardTable
          dataSource={chupHinhDoAnData}
          columns={chupHinhDoAnColumn}
        />

        {/* Chụp hình kinh doanh đội nhóm */}
        <h2 className="anchor-title" id="chup-hinh-doi-nhom">
          Chụp hình kinh doanh đội nhóm
        </h2>
        <PriceReportCardTable
          dataSource={chupHinhDoAnData}
          columns={chupHinhDoAnColumn}
        />

        {/* Chụp hình nude sexy */}
        <h2 className="anchor-title" id="chup-hinh-nude-sexy">
          Chụp hình Nude - Sexy
        </h2>
        <PriceReportCardTable
          dataSource={chupHinhSexyData}
          columns={chupHinhSexyColumn}
        />

        {/* Chụp hình sản phẩm */}
        <h2 className="anchor-title" id="chup-hinh-san-pham">
          Chụp hình sản phẩm
        </h2>
        <PriceReportCardTable
          dataSource={chupHinhSanPhamData}
          columns={chupHinhSanPhamColumn}
        />

        {/* Chụp hình review ô tô */}
        <h2 className="anchor-title" id="chup-hinh-oto">
          Chụp/quay review Oto
        </h2>
        <PriceReportCardTable
          dataSource={chupHinhReviewOtoData}
          columns={chupHinhReviewOtoColumn}
        />
        <PriceReportCardTable
          dataSource={quayReviewOtoData}
          columns={quayReviewOtoColumn}
        />

        {/* Chụp hình sự kiện */}
        <h2 className="anchor-title" id="chup-hinh-su-kien">
          Chụp hình sự kiện
        </h2>
        <PriceReportCardTable
          dataSource={chupHinhSuKienData}
          columns={chupHinhSuKienColumn}
        />
      </div>
      <div className="list-anchor">
        <Anchor>
          <Link href="#chup-hinh-doanh-nhan" title="Chụp hình doanh nhân" />
          <Link href="#chup-hinh-do-an" title="Chụp hình đồ ăn" />
          <Link
            href="#chup-hinh-doi-nhom"
            title="Chụp hình kinh doanh đội nhóm"
          />
          <Link href="#chup-hinh-nude-sexy" title="Chụp hình Nude - Sexy" />
          <Link href="#chup-hinh-san-pham" title="Chụp hình sản phẩm" />
          <Link href="#chup-hinh-oto" title="Chụp/quay review Oto" />
          <Link href="#chup-hinh-su-kien" title="Chụp hình sự kiện" />
        </Anchor>
      </div>
    </div>
  );
};

export default PriceReportPage;
