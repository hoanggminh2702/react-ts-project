import React from "react";
import MovieSlider from "../../components/MovieSlider";
import { moviesData } from "../../data/data";
import AboutDreamworkSlider from "./AboutDreamworkSlider";
import StayInTouch from "./StayInTouch";

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
      <div className="about-dream-work">
        <h1 className="about-dream-work-title">About Dreamwork</h1>
        <AboutDreamworkSlider />
      </div>

      <StayInTouch />
    </div>
  );
};

export default HomePage;
