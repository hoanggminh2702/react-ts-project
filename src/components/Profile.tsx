import { MovieType } from "@/data/data";
import React, { memo } from "react";
import MovieSlider from "./MovieSlider";

export type ProfileProps = {
  nickName: string;
  name: string;
  images: Array<MovieType>;
  dateOfBirth: string;
};

const Profile = (props: ProfileProps) => {
  return (
    <div className="profile">
      <div className="profile-name">
        {props.nickName.split(" ").map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
      <div className="profile-inner">
        <div className="profile-image">
          <div className="color-bg artist-crbg" />
          <div className="artist-img">
            {props.images.length === 1 && (
              <img alt={props.nickName} src={props.images[0].img as string} />
            )}
            {props.images.length > 1 && (
              <MovieSlider items={props.images} slidesPerView={1} />
            )}
          </div>
        </div>
        <div className="profile-txt">
          <div className="name-title">{props.name}</div>
          <div className="date-of-birth">Ngày sinh: {props.dateOfBirth}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Profile);
