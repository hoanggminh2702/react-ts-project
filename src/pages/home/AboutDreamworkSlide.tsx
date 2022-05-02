import React, { useCallback, useEffect, useRef, useState } from "react";
import ISwiper, { Zoom } from "swiper";
import "swiper/css/zoom";
import { SwiperSlide } from "swiper/react";
import Slider, { SliderRefType } from "../../components/Slider";
import { aboutDreamworkData } from "../../data/data";

type Props = {};

// Wrong calculated
// const calculatedRealIndex = (curSlide: number, slide: number): number => {
//   if (curSlide % slide < slide) return curSlide % slide;

//   return calculatedRealIndex(curSlide % slide, slide);
// };

const AboutDreamworkSlide = (props: Props) => {
  const sliderRef = useRef<SliderRefType | null>(null);
  const [curIndex, setCurIndex] = useState<number>(0);

  const clickedFunction = useCallback((e: ISwiper): void => {
    if (e.clickedIndex > e.activeIndex) e.slideNext();
    else if (e.clickedIndex < e.activeIndex) e.slidePrev();
  }, []);

  // Handle When Click Change Slide
  const handleClickChangeSlide = useCallback((index: number) => {
    setCurIndex(index);
  }, []);

  // Handle When Change Slide => Set Current Index
  const handleSlideChange = useCallback((e: ISwiper) => {
    setCurIndex(e.realIndex);
  }, []);

  // Handle When click to a Slide
  const handleClickToChangeSlide = useCallback((e: ISwiper) => {
    clickedFunction(e);
  }, []);

  const handleOnSwiper = useCallback((e: ISwiper) => {
    e.on("slideChange", handleSlideChange);
    e.on("click", handleClickToChangeSlide);
  }, []);

  // When Current Index Change => Change Slide
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
        spaceBetween={40}
        className="about-dreamwork-slider"
        loop
        centeredSlides
        modules={[Zoom]}
        zoom
      >
        {aboutDreamworkData.map((item, index) => {
          return (
            <SwiperSlide key={item.title}>
              <div
                className="about-dreamwork-wrapper"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-delay={`${index * 100}`}
              >
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
