const Images = {
  get movies() {
    return {
      get bossBaby() {
        return new URL(
          "./movies-section/boss-baby-2-pc-keyart.jpg",
          import.meta.url
        ).href;
      },

      get pussInBoots() {
        return new URL(
          "./movies-section/puss-in-boots-the-last-wish-key-art.jpg",
          import.meta.url
        ).href;
      },

      get badGuy() {
        return new URL(
          "./movies-section/the-bad-guys-key-art.jpg",
          import.meta.url
        ).href;
      },
    };
  },
};

export default Images;
