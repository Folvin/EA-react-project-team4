import {Config} from "./Interfaces";

const Lost: Config = {
  navColor: "bg-black" /* bg-black per navbar nere e bg-white per navbar bianche */,
  textColor: "text-white" /* text-black per navbar bianche e text-white per navbar nere */,
  hoverColor:
    "hover:text-[#4D4A8A]" /* hoverColor, mobileBorderColor, mobileActiveColor e buyButtonColor corrispondono sempre, ma sono separati perché usano quattro classi tailwind diverse */,
  mobileActiveColor: "text-[#4D4A8A]",
  mobileBorderColor: "border-[#4D4A8A]",
  buyButtonColor: "bg-[#4D4A8A]",
  font: "baskerville",
  mobileSidebarHeaderColor:
    "bg-[#161616]" /* bg-[#161616] per le navbar nere e bg-[#1C1F26] per le navbar bianche*/,
  burgerColor: "#FFFFFF" /* #FFFFFF per navbar nere e #000000 per navbar bianche */,
  logo: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/lir-logo-horz-white-rgb.svg",
  free: false /* Determina se il gioco è free to play o no e cambia il testo del BuyButton nella navbar */,
  navLinks: [
    {
      main: "Panoramica",
      /*       mainLink: "", */
      subsections: [
        {
          subTitles: [
            {
              title: "Storia",
              link: "https://www.ea.com/it-it/games/apex-legends/about",
            },
            {
              title: "Personaggi",
              link: "https://www.ea.com/it-it/games/apex-legends/about/characters",
            },
            {
              title: "Panoramica sul gameplay",
              link: "https://www.ea.com/it-it/games/apex-legends/maps",
            },
            {
              title: "Requisiti di Sistema (PC)",
              link: "https://www.ea.com/it-it/games/apex-legends/about/frequently-asked-questions",
            },
            {
              title: "Sistema delle carte",
              link: "https://www.ea.com/it-it/games/apex-legends/about/pc-system-requirements",
            },
          ],
        },
      ],
    },
    {
      main: "Contenuti multimediali",
      mainLink: "#",
    },
    {
      main: "Notizie",
      mainLink: "#",
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

export default Lost;

/*      Come usare config per NavigationBar

import config from "../src/components/config/NomeDelGiocoConfig";

      <NavigationBar
        navColor={config.navColor}
        textColor={config.textColor}
        burgerColor={config.burgerColor}
        font={config.font}
        logo={config.logo}
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
