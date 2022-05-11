import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { memo, ReactNode, useCallback, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { MovieType } from "../data/data";
import MovieCard from "./MovieCard";
import Slider, { SliderRefType } from "./Slider";

type ChangeSlideArrowType = {
  width?: number;

  next?: Function;
  prev?: Function;
  children?: ReactNode;
};

const ChangeSlideArrow: React.FC<ChangeSlideArrowType> = memo(
  ({ next, prev, width = 60, children }) => {
    // useCallback to avoid uneccessary re-render
    const nextSlide = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        next && next(e);
      },
      [next]
    );

    const prevSlide = useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        prev && prev(e);
      },
      [prev]
    );
    return (
      <div
        className="change-slide-wrapper"
        style={{
          paddingLeft: width / 2,
          paddingRight: width / 2,
        }}
      >
        <div
          className="change-slide-btn prev-btn"
          onClick={prevSlide}
          style={{
            width,
            height: width,
          }}
        >
          <LeftOutlined />
        </div>
        {children}
        <div
          className="change-slide-btn next-btn"
          onClick={nextSlide}
          style={{
            width,
            height: width,
          }}
        >
          <RightOutlined />
        </div>
      </div>
    );
  }
);

type Props = {
  items: Array<MovieType>;
  slidesPerView?: number;
  arrowWidth?: number;
  isAutoRatio?: boolean;
};

const MovieSlider = ({
  isAutoRatio,
  items,
  slidesPerView = 3,
  arrowWidth,
}: Props) => {
  const sliderRef = useRef<SliderRefType | null>(null);

  const handleNextSlide = useCallback(() => {
    sliderRef.current?.next();
  }, [sliderRef.current]);

  const handlePrevSlide = useCallback(() => {
    sliderRef.current?.prev();
  }, [sliderRef.current]);
  return isAutoRatio ? (
    <div className="auto-ratio-height">
      <ChangeSlideArrow
        width={arrowWidth}
        next={handleNextSlide}
        prev={handlePrevSlide}
      >
        <Slider
          ref={sliderRef}
          loop
          className="movie-slider"
          slidesPerView={slidesPerView}
          spaceBetween={16}
        >
          {items.map((movie, index) => {
            return (
              <SwiperSlide key={movie.id} className="movie-slide">
                <MovieCard index={index} img={movie.img} />
              </SwiperSlide>
            );
          })}
        </Slider>
      </ChangeSlideArrow>
    </div>
  ) : (
    <ChangeSlideArrow
      width={arrowWidth}
      next={handleNextSlide}
      prev={handlePrevSlide}
    >
      <Slider
        ref={sliderRef}
        loop
        className="movie-slider"
        slidesPerView={slidesPerView}
        spaceBetween={16}
      >
        {items.map((movie, index) => {
          return (
            <SwiperSlide key={movie.id} className="movie-slide">
              <MovieCard index={index} img={movie.img} />
            </SwiperSlide>
          );
        })}
      </Slider>
    </ChangeSlideArrow>
  );
};

export default MovieSlider;
