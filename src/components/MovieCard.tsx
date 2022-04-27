import React, { memo } from "react";
import { MovieType } from "../data/data";

type Props = {
  [index in keyof Omit<MovieType, "id">]?: string;
};

const MovieCard = (props: Props) => {
  return (
    <div className="movie-card-container">
      <div className="movie-card">
        {props.img && <img src={props.img} className="movie-card-img" />}
      </div>
      <div className="movie-card-overlay"></div>
    </div>
  );
};

export default memo(MovieCard);
