import React, { memo } from "react";
import { MovieType } from "../data/data";

type Props = {
  index: number;
} & {
  [index in keyof Omit<MovieType, "id">]?: string;
};

const MovieCard = (props: Props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-delay={`${props.index * 100}`}
      className="movie-card-container"
    >
      <div className="movie-card">
        {props.img && <img src={props.img} className="movie-card-img" />}
      </div>
      <div className="movie-card-overlay"></div>
    </div>
  );
};

export default memo(MovieCard);
