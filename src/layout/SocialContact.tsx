import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import React from "react";
type Props = {};

const SocialContact = (props: Props) => {
  return (
    <div className="social-contact">
      <FacebookFilled />
      <TwitterCircleFilled />
      <YoutubeFilled />
      <InstagramFilled />
    </div>
  );
};

export default SocialContact;
