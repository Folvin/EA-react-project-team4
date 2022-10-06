import { Config } from "../../components/config/Interfaces";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa';
import { LocalFooterType } from "../../components/config/Interfaces";

//CONFIG FILE FOR LOCALFOOTER HOMEPAGE


export const F1ConfigHeroContent = [
  {
    id: 1,
    imgMobile: 'assets/pages/f1-ea/f122-home-new_season01-mobile.png',
    imgDesktop: 'assets/pages/f1-ea/f122-home-new_season01.png',
    imgOrder: 'lg:order-2',
    title: 'NUOVA STAGIONE, NUOVE REGOLE',
    description: 'Mettiti al volante con auto ridisegnate e regole rinnovate che ridefiniscono ogni gara con i partecipanti ufficiali del 2022.',
    articleOrder: 'lg:order-1'
  },
  {
    id: 2,
    imgMobile: 'assets/pages/f1-ea/f122-home-race_day02-mobile.png',
    imgDesktop: 'assets/pages/f1-ea/f122-home-race_day02.png',
    imgOrder: 'lg:order-1',
    title: 'GARE RIDEFINITE',
    description: "Prendi il controllo dell'esperienza F1® con opzioni di trasmissione per pit stop, giri di formazione e molto altro.",
    articleOrder: 'lg:order-2'
  },
  {
    id: 3,
    imgMobile: 'assets/pages/f1-ea/f122-home-new_era03-mobile.png',
    imgDesktop: 'assets/pages/f1-ea/f122-home-new_era03.png',
    imgOrder: 'lg:order-2',
    title: "È ARRIVATA LA NUOVA ERA",
    description: "Preparati a metterti al volante.",
    articleOrder: 'lg:order-1'
  }
]

export const F1ConfigLocalFooter: LocalFooterType = {
  bgColor: 'bg-zinc-900', //LocalFooter background Color
  textColor: 'text-white', //LocalFooter Text Color and Social media icon color
  linkColor: 'text-gray-400', //LocalFooter Link color
  hover: 'hover:text-orange-400', // Color hover LocalFooter Link

  //LocalFooter Link
  title: 'F1®22',
  links: [
    { name: 'F1® Mobile Racing', path: '#' },
    { name: 'Formula 1®', path: '#' },
    { name: "F1® Esports", path: '#' },
    { name: 'Requisiti di sistema (PC)', path: '#' },
    { name: 'Dual Entitlement', path: '#' },
    { name: 'Esclusioni di responsabilità', path: '#' },
  ],

  //Condition and Disclaimer
  condition: [
    {
      id: 1,
      value: `Gioco F1® 22: un prodotto ufficiale del FIA FORMULA ONE WORLD CHAMPIONSHIP. © 2022 Electronic Arts Inc. EA, EA SPORTS, il logo EA SPORTS, Codemasters, EGO e il logo Codemasters sono marchi di Electronic Arts Inc.`
    },
    {
      id: 2,
      value: 'Il logo F1 FORMULA 1, il logo F1, FORMULA 1, F1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX e i relativi marchi sono marchi di Formula One Licensing BV, una società Formula 1. © 2022 Cover images Formula One World Championship Limited, una società Formula 1. Concesso su licenza da Formula One World Championship Limited. Il logo F2 FIA FORMULA 2 CHAMPIONSHIP, FIA FORMULA 2 CHAMPIONSHIP, FIA FORMULA 2, FORMULA 2, F2 e i relativi marchi sono marchi della Fédération Internationale de l’Automobile e sono utilizzati esclusivamente sotto licenza. Tutti i diritti riservati.'
    }
  ],

  // Social Media Icon. 
  social: [
    {
      icon: <FaTwitter size={20} />,
      link: 'https://www.twitter.com/ea'
    },
    {
      icon: <FaFacebookF size={20} />,
      link: 'https://www.facebook.com/ea.it/?brand_redir=68678914189'
    },
    {
      icon: <FaYoutube size={20} />,
      link: 'https://www.youtube.com/EAvideos'
    },
    {
      icon: <FaInstagram size={20} />,
      link: 'https://www.instagram.com/ea'
    },

  ]
}

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
