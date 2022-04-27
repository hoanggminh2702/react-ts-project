import Images from "../assets/images/Images";

export type MovieType = {
  id: number;
  name: string;
  date: string;
  img: string;
};

export const moviesData: Array<MovieType> = [
  {
    id: 1,
    name: "Puss in Boots: The Last Wish",
    date: "In Theaters September 23, 2022",
    img: Images.movies.pussInBoots,
  },

  {
    id: 2,
    name: "Puss in Boots: The Last Wish",
    date: "In Theaters September 23, 2022",
    img: Images.movies.badGuy,
  },

  {
    id: 3,
    name: "Puss in Boots: The Last Wish",
    date: "In Theaters September 23, 2022",
    img: Images.movies.bossBaby,
  },
];

// About Dreamwork
export type AboutDreamworkType = {
  title: string;
  img: string;
};

export const aboutDreamworkData: Array<AboutDreamworkType> = [
  {
    title: "campus",
    img: Images.aboutDreamwork.campus,
  },
  {
    title: "movies",
    img: Images.aboutDreamwork.movies,
  },
  {
    title: "tv",
    img: Images.aboutDreamwork.tv,
  },
  {
    title: "tech",
    img: Images.aboutDreamwork.tech,
  },
];
