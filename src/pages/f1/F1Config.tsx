import { Config } from "../../components/config/Interfaces";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa';
import { LocalFooterType } from "../../components/config/Interfaces";







//CONFIG FILE FOR FORM AND NEWSLETTERS SECTION
export const F1ConfigNewsletter = {
  game: 'F1® 22',
  bgColor: 'bg-black',
  textColor: 'text-white',
  background: 'bg-f1-newsletter-bg',
  article: {
    title: 'NON PERDERTI NULLA CON LE E-MAIL DI EA E',
    description: 'Iscriviti subito per ricevere e-mail con notizie, aggiornamenti, contenuti dietro le quinte, offerte esclusive e molto altro su F1® 22. Sono incluse altre informazioni su novità, prodotti, eventi e promozioni di EA..'
  }
}


//CONFIG FILE FOR LOCALFOOTER HOMEPAGE


//Config file for HeroContent and last news
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

//Config file for card content
export const F1ConfigContainerCard = [
  {
    id: 1,
    date: '26-SET-2022',
    title: 'F1®22-Aggiornamento delle valutazioni dei piloti (Monza)',
    description: 'Le battaglie in griglia si riflettono nelle',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-01.png'
  },
  {
    id: 2,
    date: '12-SET-2022',
    title: 'F1®22-Note sulla patch 1.10',
    description: 'Lo Shanghai international Circuit, una livrea Ferrari speciale, correzioni relative alla risposta del cordolo, alle informazioni di telemetria nelle strategie di gara e altro',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-02.png'
  },
  {
    id: 3,
    date: '12-SET-2022',
    title: 'La Cina fa il suo ritorno in F1® nel nuovo aggiornamento gratuito',
    description: 'Al gioco sono stati aggiunti lo Shanghai International Circuit, una livrea Ferrari speciale e un evento dedicato alla festa della luna',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-03.png'
  },
  {
    id: 4,
    date: '24-AGO-2022',
    title: 'Il cross-play arriva in F1®22-UPDATED',
    description: 'A partire da oggi, potrai correre nello sport motoristico più veloce del mondo sfidando giocatori di qualsiasi piattaforma',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-04.png'
  },
  {
    id: 5,
    date: '24-AGO-2022',
    title: 'Serie 2 del Pass Podio disponibile adesso',
    description: 'Alcune spettacolari livree debuttano nella serie 2 del Pass Podio',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-05.png'
  },
  {
    id: 6,
    date: '22-AGO-2022',
    title: 'F1®22-Note sulla patch 1.09',
    description: 'Cambio automatico, temperature delle gomme e molto altro; scopri cosa è stato corretto nella patch 1.09',
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-06.png'
  },
  {
    id: 7,
    date: '22-AGO-2022',
    title: 'F1®22-Aggiornamento delle valutazioni dei piloti',
    description: "Con la conclusione del Gran Premio d'Ungheria, è iniziata la pausa estiva del nostro sport motoristico preferito. Quale momento migliore, dunque, per aggiornare le valutazioni dei piloti di F1®22?",
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-07.png'
  },
  {
    id: 8,
    date: '9-AGO-2022',
    title: 'F1®22-Note sulla patch 1.08',
    description: "Scopri di più sull'ultima patch",
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-08.png'
  },
  {
    id: 9,
    date: '2-AGO-2022',
    title: 'F1®22-Note sulla patch 1.07',
    description: "Scopri di più sull'ultima patch",
    logo: 'F1®22',
    avatar: 'assets/pages/f1-ea/card-avatar-09.png'
  },
];

//CONFIG FILE FOR LOCAL FOOTER
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

//CONFIG FILE FOR HERO BANNER CONFIGURATION
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

//CONFIG FILE FOR VIDEO SECTION CONFIGURATION
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


//CONFIG FILE FOR NAVBAR AND HAMBURGHER MENU CONFIGURATION
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
