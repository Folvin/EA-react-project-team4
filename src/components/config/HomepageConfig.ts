import {Config} from "./Interfaces";

const HomepageConfig: Config = {
  navColor: "bg-white",
  textColor: "text-black",
  hoverColor:
    "hover:text-[#FF4747]",
  mobileActiveColor: "text-[#FF4747]",
  mobileBorderColor: "border-[#FF4747]",
  buyButtonColor: "bg-[#FF4747]",
  font: "font-roboto-normal",
  mainPage: "/homepage",
  mobileSidebarHeaderColor:
    "bg-[#F3F3F3]",
  burgerColor: "#000000",
  logo: "assets/pages/homepage/navbarIcon.png",
  free: true,
  navLinks: [
    {
      main: "GIOCHI",
      subsections: [
        {
          title: "ESPLORA I GIOCHI",
          subTitles: [
            {
              title: "Ultimi giochi",
              link: "https://www.ea.com/it-it/games",
            },
            {
              title: "Prossimamente",
              link: "https://www.ea.com/it-it/games/coming-soon",
            },
            {
              title: "Giochi gratuiti",
              link: "https://www.ea.com/it-it/games/library/freetoplay",
            },
            {
              title: "EA SPORTS",
              link: "https://www.ea.com/it-it/sports",
            },
            {
              title: "EA Originals",
              link: "https://www.ea.com/it-it/ea-originals",
            },
            {
              title: "Libreria dei giochi",
              link: "https://www.ea.com/it-it/games/library",
            },
          ],
        },
        {
          title: "PIATTAFORME",
          subTitles: [
            {
              title: "PC",
              link: "https://www.ea.com/it-it/games/library/pc-download",
            },
            {
              title: "PlayStation®5",
              link: "https://www.ea.com/it-it/games/library/ps5",
            },
            {
              title: "Xbox Series X",
              link: "https://www.ea.com/it-it/games/library/xbox-series-x",
            },
            {
              title: "Nintendo Switch™",
              link: "https://www.ea.com/it-it/games/library/nintendo-switch",
            },
            {
              title: "Cellulari",
              link: "https://www.ea.com/it-it/games/library/mobile",
            },
          ],
        },
      ],
    },

    {
      main: "ALTRE ESPERIENZE",
      subsections: [
        {
          subTitles: [
            {
              title: "EA Play",
              link: "https://www.ea.com/it-it/ea-play",
            },
            {
              title: "l'EA app",
              link: "https://www.ea.com/it-it/ea-app",
            },
            {
              title: "Competizioni videoludiche",
              link: "https://www.ea.com/it-it/compete",
            },
            {
              title: "Diretta di EA Play",
              link: "https://www.ea.com/it-it/ea-play-live",
            },
          ],
        },
      ],
    },
    {
      main: "INFORMAZIONE",
      subsections: [
        {
          subTitles: [
            {
              title: "Società",
              link: "http://www.ea.com/it-it/about",
            },
            {
              title: "EA Studi",
              link: "https://www.ea.com/it-it/studios",
            },
            {
              title: "Lavora con noi",
              link: "https://www.ea.com/it-it/careers",
            },
            {
              title: "La nostra tecnologia",
              link: "https://www.ea.com/it-it/technology",
            },
            {
              title: "EA Partners",
              link: "https://www.ea.com/it-it/ea-partners",
            },
            {
              title: "Notizie",
              link: "https://www.ea.com/it-it/news",
            },
            {
              title: "Inside EA",
              link: "https://www.ea.com/it-it/inside-ea",
            },
          ],
        },
      ],
    },
    {
      main: "IMPEGNI",
      subsections: [
        {
          subTitles: [
            {
              title: "I nostri impegni",
              link: "/",
            },
            {
              title: "Gioco positivo",
              link: "/",
            },
            {
              title: "Diversità e inclusione",
              link: "/",
            },
            {
              title: "Impatto sociale",
              link: "/",
            },
            {
              title: "Persone e cultura",
              link: "/",
            },
            {
              title: "Ambiente",
              link: "/",
            },
          ],
        },
      ],
    },

    {
      main: "RISORSE",
      subsections: [
        {
          subTitles: [
            {
              title: "Aiuto",
              link: "/",
            },
            {
              title: "Forum",
              link: "/",
            },
            {
              title: "Filtro famiglia",
              link: "/",
            },
            {
              title: "Accessibilità",
              link: "/",
            },
            {
              title: "Stampa",
              link: "/",
            },
            {
              title: "Investitori",
              link: "/",
            },
            {
              title: "Test di gioco",
              link: "/",
            },
          ],
        },
      ],
    },
  ],
};

export default HomepageConfig;
