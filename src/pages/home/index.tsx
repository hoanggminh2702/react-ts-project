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
      <div
        className="test"
        style={{
          height: "100vh",
        }}
      ></div>
      <MovieSlider items={moviesData} />
    </div>
  );
};

export default HomePage;
