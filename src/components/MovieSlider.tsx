import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { memo, ReactNode, useCallback, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { MovieType } from "../data/data";
import MovieCard from "./MovieCard";
import Slider, { SliderRefType } from "./Slider";

type Props = {
  items: Array<MovieType>;
};

type ChangeSlideArrowType = {
  width?: number;

  next?: Function;
  prev?: Function;
  children?: ReactNode;
};

const ChangeSlideArrow: React.FC<ChangeSlideArrowType> = memo(
  ({ next, prev, width = 40, children }) => {
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

const MovieSlider = ({ items }: Props) => {
  const sliderRef = useRef<SliderRefType | null>(null);

  const handleNextSlide = useCallback(() => {
    sliderRef.current?.next();
  }, [sliderRef.current]);

  const handlePrevSlide = useCallback(() => {
    sliderRef.current?.prev();
  }, [sliderRef.current]);
  return (
    <ChangeSlideArrow next={handleNextSlide} prev={handlePrevSlide}>
      <Slider ref={sliderRef} loop className="movie-slider" slidesPerView={3}>
        {items.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className="movie-slide">
              <MovieCard img={movie.img} />
            </SwiperSlide>
          );
        })}
      </Slider>
    </ChangeSlideArrow>
  );
};

export default MovieSlider;
