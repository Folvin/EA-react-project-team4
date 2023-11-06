import {Config} from "./Interfaces";

const ApexConfig: Config = {
  navColor: "bg-black" /* bg-black per navbar nere e bg-white per navbar bianche */,
  textColor: "text-white" /* text-black per navbar bianche e text-white per navbar nere */,
  hoverColor:
    "hover:text-red-600" /* hoverColor, mobileBorderColor, mobileActiveColor e buyButtonColor corrispondono sempre, ma sono separati perché usano quattro classi tailwind diverse */,
  mobileActiveColor: "text-red-600",
  mobileBorderColor: "border-red-600",
  buyButtonColor: "bg-red-600",
  font: "font-teko",
  mainPage: "/apex" /* Determina l'url della mainpage del gioco */,
  mobileSidebarHeaderColor:
    "bg-[#161616]" /* bg-[#161616] per le navbar nere e bg-[#1C1F26] per le navbar bianche*/,
  burgerColor: "#FFFFFF" /* #FFFFFF per navbar nere e #000000 per navbar bianche */,
  logo: "assets/core/apex-white-nav-logo.svg",
  free: true /* Determina se il gioco è free to play o no e cambia il testo del BuyButton nella navbar */,
  navLinks: [
    {
      main: "Informazioni",
      /*       mainLink: "", */
      subsections: [
        {
          title: "Panoramica",
          subTitles: [
            {
              title: "Apex Legends",
              link: "https://www.ea.com/it-it/games/apex-legends/about",
            },
            {
              title: "Leggende",
              link: "https://www.ea.com/it-it/games/apex-legends/about/characters",
            },
            {
              title: "Mappe",
              link: "https://www.ea.com/it-it/games/apex-legends/maps",
            },
            {
              title: "Domande Frequenti",
              link: "https://www.ea.com/it-it/games/apex-legends/about/frequently-asked-questions",
            },
            {
              title: "Requisiti PC",
              link: "https://www.ea.com/it-it/games/apex-legends/about/pc-system-requirements",
            },
            {
              title: "Riconoscimenti",
              link: "https://www.ea.com/it-it/games/apex-legends/credits",
            },
            {
              title: "Accessibilità",
              link: "https://www.ea.com/it-it/able/resources/apex-legends",
            },
          ],
        },
        {
          title: "Negozio",
          subTitles: [
            {
              title: "Edizione Champion",
              link: "https://www.ea.com/it-it/games/apex-legends/legend-editions/champion-edition",
            },
          ],
        },
      ],
    },
    {
      main: "Modalità",
      /*       mainLink: "", */
      subsections: [
        {
          /*           title: "", */
          subTitles: [
            {
              title: "Arene",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
            {
              title: "Battle Royale",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/battle-royale",
            },
          ],
        },
      ],
    },
    {
      main: "Stagioni",
      mainLink: "https://www.ea.com/it-it/games/apex-legends/hunted",
    },
    {
      main: "Pass Battaglia",
      mainLink: "https://www.ea.com/it-it/games/apex-legends/battle-pass",
    },
    {
      main: "Notizie e Contenuti Multimediali",
      /*       mainLink: "", */
      subsections: [
        {
          /*           title: "", */
          subTitles: [
            {
              title: "Ultime Notizie",
              link: "https://www.ea.com/it-it/games/apex-legends/news",
            },
            {
              title: "Aggiornamenti di Gioco",
              link: "https://www.ea.com/it-it/games/apex-legends/news#game-updates",
            },
            {
              title: "Ultimi Contenuti Multimediali",
              link: "https://www.ea.com/it-it/games/apex-legends/media",
            },
          ],
        },
      ],
    },
    {
      main: "Community",
      /*       mainLink: "", */
      subsections: [
        {
          title: "Social",
          subTitles: [
            {
              title: "Twitter",
              link: "https://twitter.com/PlayApex",
            },
            {
              title: "Instagram",
              link: "https://www.instagram.com/playapex/",
            },
            {
              title: "Facebook",
              link: "https://www.facebook.com/playapex",
            },
            {
              title: "Youtube",
              link: "https://www.youtube.com/playapex",
            },
            {
              title: "Twitch",
              link: "https://www.twitch.tv/playapex",
            },
          ],
        },
        {
          title: "Community",
          subTitles: [
            {
              title: "Forum",
              link: "https://answers.ea.com/t5/Apex-Legends/ct-p/apex-legends-it?profile.language=it",
            },
          ],
        },
        {
          title: "Prodotti Ufficiali",
          subTitles: [
            {
              title: "playapexshop.com",
              link: "https://www.ea.com/it-it/games/apex-legends/apex-legends-shop",
            },
          ],
        },
      ],
    },
    {
      main: "Competi",
      /*       mainLink: "", */
      subsections: [
        {
          /*           title: "", */
          subTitles: [
            {
              title: "Competi",
              link: "https://www.ea.com/it-it/games/apex-legends/compete",
            },
            {
              title: "Linee Guida della Community",
              link: "https://www.ea.com/it-it/games/apex-legends/community-tournament-guidelines",
            },
          ],
        },
      ],
    },
  ],
  buyButtonConfig: {
    eaApp: "https://www.ea.com/it-it/games/apex-legends/buy/pc",
    steam: "https://smarturl.it/apex-steam-unav",
    ps4: "http://smarturl.it/apexlegends-ps4",
    ps5: "https://store.playstation.com/product/EP0006-PPSA04874_00-APEXLEGENDRSPWN1",
    xbox: "https://www.microsoft.com/p/APEX-Legends/BV9ML45J2Q5V",
    switch: "https://smarturl.it/apex-std-ed-switch",
  },
};

export default ApexConfig;

/*      Come usare config per NavigationBar

import config from "../src/components/config/NomeDelGiocoConfig";

    <div>
      <NavigationBar
        navColor={config.navColor}
        textColor={config.textColor}
        burgerColor={config.burgerColor}
        font={config.font}
        logo={config.logo}
        mainPage={config.mainPage}
        hoverColor={config.hoverColor}
        mobileActiveColor={config.mobileActiveColor}
        mobileBorderColor={config.mobileBorderColor}
        buyButtonConfig={config.buyButtonConfig}
        buyButtonColor={config.buyButtonColor}
        navLinks={config.navLinks}
        mobileSidebarHeaderColor={config.mobileSidebarHeaderColor}
        free={config.free}
      />
*/
