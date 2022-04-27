import React from "react";
import { SwiperSlide } from "swiper/react";
import Images from "../assets/images/Images";
import Slider from "./Slider";

type Props = {};

type AboutDreamworkType = {
  title: string;
  img: string;
};

const aboutDreamworkData: Array<AboutDreamworkType> = [
  {
    title: "campus",
    img: Images.aboutDreamwork.campus,
  },
  {
    title: "movies",
    img: Images.aboutDreamwork.movies,
  },
  {
    title: "tv",
    img: Images.aboutDreamwork.tv,
  },
  {
    title: "tech",
    img: Images.aboutDreamwork.tech,
  },
];

const AboutDreamworkSlide = (props: Props) => {
  return (
    <Slider
      slidesPerView={3}
      spaceBetween={120}
      className="about-dreamwork-slider"
      centeredSlides
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
  );
};

export default AboutDreamworkSlide;
