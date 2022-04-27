import React from "react";
import AboutDreamworkSlide from "../../components/AboutDreamworkSlide";
import MovieSlider from "../../components/MovieSlider";
import { moviesData } from "../../data/data";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="wrapper">
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
      <div
        style={{
          width: "100%",
          padding: 20,
        }}
      >
        <AboutDreamworkSlide />
      </div>
    </div>
  );
};

export default HomePage;
