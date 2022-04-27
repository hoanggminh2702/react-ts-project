import React, { useCallback, useEffect, useRef, useState } from "react";
import ISwiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { aboutDreamworkData } from "../data/data";
import Slider, { SliderRefType } from "./Slider";

type Props = {};

const AboutDreamworkSlide = (props: Props) => {
  const sliderRef = useRef<SliderRefType | null>(null);
  const [curIndex, setCurIndex] = useState<number>(0);

  const handleClickChangeSlide = useCallback((index: number) => {
    setCurIndex(index);
  }, []);

  const handleSlideChange = useCallback((e: ISwiper) => {
    setCurIndex(e.realIndex);
  }, []);

  const handleOnSwiper = useCallback((e: ISwiper) => {
    e.on("slideChange", handleSlideChange);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.toRealIndex(curIndex);
    }
  }, [sliderRef.current?.toRealIndex, curIndex]);
  return (
    <>
      <div className="about-dreamwork-text">
        {aboutDreamworkData.map((item, index) => {
          return (
            <div
              className={`about-dreamwork-item ${
                index === curIndex ? "active-index" : ""
              }`}
              key={`${item.title}-${index}`}
              onClick={() => handleClickChangeSlide(index)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <Slider
        ref={sliderRef}
        onSwiper={handleOnSwiper}
        slidesPerView={3}
        spaceBetween={120}
        className="about-dreamwork-slider"
        loop
        centeredSlides
        centeredSlidesBounds
      >
        {aboutDreamworkData.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <div className="about-dreamwork-wrapper">
                <div
                  className="about-dreamwork"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Slider>
    </>
  );
};

export default AboutDreamworkSlide;
