import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieType } from "../data/data";
import MovieCard from "./MovieCard";

type Props = {
  items: Array<MovieType>;
};

const MovieSlider = ({ items }: Props) => {
  return (
    <Swiper loop className="movie-slider" slidesPerView={3}>
      {items.map((movie) => {
        console.log(movie.img);
        return (
          <SwiperSlide key={movie.id} className="movie-slide">
            <MovieCard img={movie.img} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MovieSlider;
