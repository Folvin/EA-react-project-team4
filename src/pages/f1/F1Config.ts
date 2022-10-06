import {Config} from "../../components/config/Interfaces";

//Hero banner configuration
export const F1ConfigBanner = {
  logo: "assets/pages/f1-ea/f122-black-logo.png",
  background: "bg-f1-orange-banner",
  title: {
    value: "SPETTACOLARI LIVREE DEBUTTANO NELLA SERIE 2 DEL PASS PODIO.",
    font: "font-f1-bold",
  },
  button: {
    value: "Altre informazioni",
    font: "font-f1-regular",
    bgColor: "bg-slate-100", //#f1f5f9
  },
};

//Video section configuration
export const F1ConfigVideoSection = {
  button: {
    buttonOne: {
      value: "Acquista ora",
      font: "font-f1-regular",
      bgColor: "bg-orange-400",
    },
    buttonTwo: {
      value: "Guarda il trailer",
      font: "font-f1-regular",
      bgColor: "",
    },
  },
  article: {
    title: {
      value: "GAREGGIA CON LA LIVREA SPECIALE PER IL GP D'ITALIA",
      font: "font-f1-bold",
    },
    subTitle: {
      value: "Disponibile ora nel gioco per tutti i giocatori",
      font: "font-f1-regular",
    },
  },
  video: {
    url: "https://media.contentapi.ea.com/content/dam/ea/f1/f1-2022/common/homepage-hero-ferrari/f122-ferrari-homepage-3x2-l-m-1455x970.mp4",
    type: "video/mp4",
    poster: "assets/pages/f1-ea/video-fallback.jpg"
  },
  logo: {
    url: "assets/pages/f1-ea/f122-black-logo.png",
    description: "Logo F122 white",
  },
};

const F1Config: Config = {
  navColor: "bg-white" /* classe tailwind */,
  textColor: "text-black" /* classe tailwind */,
  hoverColor:
    "hover:text-[#FF9A3A]" /* hoverColor e buyButtonColor corrispondono sempre, ma sono separati perché usano due classi tailwind diverse */,
  mobileActiveColor: "hover:text-[#FF9A3A]",
  mobileBorderColor: "border-[#FF9A3A]",
  buyButtonColor: "bg-[#FF9A3A]",
  font: "font-f1-regular",
  mainPage: "/homepage/F1",
  mobileSidebarHeaderColor: "bg-[#F3F3F3]",
  burgerColor: "#000000",
  logo: "assets/pages/f1-ea/navbar-logo.png",
  free: false,
  navLinks: [
    {
      main: "PANORAMICA SUL GIOCO",
      /*       mainLink: "", */
      subsections: [
        {
          subTitles: [
            {
              title: "Funzioni",
              link: "https://www.ea.com/it-it/games/f1/f1-22/game-features",
            },
            {
              title: "Specifiche PC",
              link: "https://www.ea.com/it-it/games/f1/f1-22/pc-system-requirements",
            },
            {
              title: "Dual Entitlement",
              link: "https://www.ea.com/it-it/games/f1/f1-22/dual-entitlement",
            },
          ],
        },
      ],
    },
    {
      main: "NOTIZIE E AGGIORNAMENTI",

      subsections: [
        {
          subTitles: [
            {
              title: "Notizie",
              link: "https://www.ea.com/it-it/games/f1/f1-22/news",
            },
            {
              title: "Note sulla patch",
              link: "https://www.ea.com/it-it/games/f1/f1-22/patch-updates",
            },
          ],
        },
      ],
    },

    {
      main: "VALUTAZIONI PILOTI",
      subsections: [
        {
          subTitles: [
            {
              title: "Database valutazioni",
              link: "https://www.ea.com/it-it/games/f1/f1-22/driver-ratings/ratings-database",
            },

            {
              title: "Informazioni sulle valutazion",
              link: "https://www.ea.com/it-it/games/f1/f1-22/driver-ratings",
            },
          ],
        },
      ],
    },
  ],
  buyButtonConfig: {
    eaApp: "https://www.ea.com/it-it/games/f1/f1-22/buy/pc",
    steam: "https://lnk.to/f122-steam",
    ps4: "https://www.ea.com/it-it/games/f1/f1-22/buy/playstation",
    ps5: "https://www.ea.com/it-it/games/f1/f1-22/buy/playstation",
  },
};

export default F1Config;
