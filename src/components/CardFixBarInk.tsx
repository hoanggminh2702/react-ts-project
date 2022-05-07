import { Card, CardProps } from "antd";
import React, { memo, useEffect, useState } from "react";

type Props = {
  id: string;
} & Omit<CardProps, "id">;

const CardFixBarInk = ({
  id,
  className,
  activeTabKey,
  tabList,
  children,
  ...props
}: Props) => {
  const [left, setLeft] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  //   Calculate the position and width of inkbar
  useEffect(() => {
    const cardElement = document.querySelector(`#${id}`) as HTMLDivElement;
    if (cardElement) {
      const totalElement = cardElement.querySelectorAll(
        ".ant-tabs-tab"
      ) as NodeListOf<HTMLDivElement>;

      let activeWidth = 0;
      let leftWidth = 0;

      Array.from(totalElement).some((element) => {
        if (element.classList.contains("ant-tabs-tab-active")) {
          activeWidth = element.offsetWidth;
          leftWidth = element.offsetLeft;
        }

        return element.classList.contains("ant-tabs-tab-active");
      });

      setLeft(leftWidth);
      setWidth(activeWidth);
    }
  }, [activeTabKey, tabList]);

  //   Set position and width of inkbar
  useEffect(() => {
    const cardElement = document.querySelector(`#${id}`) as HTMLDivElement;
    if (cardElement) {
      const inkBarElement = cardElement.querySelector(
        ".ant-tabs-ink-bar"
      ) as HTMLDivElement;

      inkBarElement.style.left = `${left}px`;
      inkBarElement.style.width = `${width}px`;
    }
  }, [left, width]);
  return (
    <Card
      id={id}
      className={`fixed-antd-card ${className || ""}`}
      activeTabKey={activeTabKey}
      tabList={tabList}
      {...props}
    >
      {children}
    </Card>
  );
};

export default memo(CardFixBarInk);
