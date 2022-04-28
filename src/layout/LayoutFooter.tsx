import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import React from "react";
import { footerData } from "../data/data";

type Props = {};

const LayoutFooter = (props: Props) => {
  return (
    <div className="layout-footer">
      <p className="footer-title">ICHI ENTERTAINMENT</p>
      <ul className="footer-menu">
        {footerData.map((item, index) => {
          return (
            <li className="footer-item" key={`${item}-footer-${index}`}>
              {item}
            </li>
          );
        })}
      </ul>

      <div className="social-contact">
        <span className="follow-text">follow ichi entertainment</span>
        <div className="social-icon">
          <FacebookFilled />
          <TwitterCircleFilled />
          <YoutubeFilled />
          <InstagramFilled />
        </div>
      </div>
    </div>
  );
};

export default LayoutFooter;
