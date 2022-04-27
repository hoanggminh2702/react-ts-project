import React from "react";
import MovieSlider from "../../components/MovieSlider";
import { moviesData } from "../../data/data";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div
      className="container"
      style={{
        maxWidth: 1024,
        width: "100%",
        margin: "auto",
      }}
    >
      <MovieSlider items={moviesData} />
    </div>
  );
};

export default HomePage;
