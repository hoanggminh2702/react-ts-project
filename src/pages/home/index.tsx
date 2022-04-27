import React from "react";
import MovieSlider from "../../components/MovieSlider";
import { moviesData } from "../../data/data";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div
      className="container"
      style={{
        maxWidth: 768,
        width: "100%",
      }}
    >
      <MovieSlider items={moviesData} />
    </div>
  );
};

export default HomePage;
