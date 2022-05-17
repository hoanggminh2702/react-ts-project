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

  get aboutDreamwork() {
    return {
      get campus() {
        return new URL(
          "./about-section/about-creative-haven.jpg",
          import.meta.url
        ).href;
      },
      get movies() {
        return new URL("./about-section/about-movies.jpg", import.meta.url)
          .href;
      },
      get tv() {
        return new URL("./about-section/about-tv.jpg", import.meta.url).href;
      },
      get tech() {
        return new URL("./about-section/about-tech.jpg", import.meta.url).href;
      },
    };
  },

  get stayInTouch() {
    return {
      get trolls() {
        return new URL(
          "./stay-in-touch-section/signup-trolls.jpg",
          import.meta.url
        ).href;
      },
    };
  },

  get artistsBinhAn() {
    return {
      get binhAn1() {
        return new URL("./artists/binh-an/ba1.jpg", import.meta.url).href;
      },
      get binhAn2() {
        return new URL("./artists/binh-an/ba2.jpg", import.meta.url).href;
      },
      get binhAn3() {
        return new URL("./artists/binh-an/ba3.jpg", import.meta.url).href;
      },
      get binhAn4() {
        return new URL("./artists/binh-an/ba4.jpg", import.meta.url).href;
      },
      get binhAn5() {
        return new URL("./artists/binh-an/ba5.jpg", import.meta.url).href;
      },
      get binhAn6() {
        return new URL("./artists/binh-an/ba6.jpg", import.meta.url).href;
      },
      get binhAn7() {
        return new URL("./artists/binh-an/ba7.jpg", import.meta.url).href;
      },
    };
  },
};

export default Images;
