import {Config} from "./Interfaces";

const FifaConfig: Config = {
  navColor: "bg-white" /* bg-black per navbar nere e bg-white per navbar bianche */,
  textColor: "text-black" /* text-black per navbar bianche e text-white per navbar nere */,
  hoverColor:
    "hover:text-[#FF5E0C]" /* hoverColor, mobileBorderColor, mobileActiveColor e buyButtonColor corrispondono sempre, ma sono separati perché usano quattro classi tailwind diverse */,
  mobileActiveColor: "text-[#FF5E0C]",
  mobileBorderColor: "border-[#FF5E0C]",
  buyButtonColor: "bg-[#FF5E0C]",
  font: "",
  mobileSidebarHeaderColor:
    "bg-[#F3F3F3]" /* bg-[#161616] per le navbar nere e bg-[#F3F3F3] per le navbar bianche*/,
  burgerColor: "#000000" /* #FFFFFF per navbar nere e #000000 per navbar bianche */,
  logo: "assets/core/EANavIcon.png",
  free: false /* Determina se il gioco è free to play o no e cambia il testo del BuyButton nella navbar */,
  navLinks: [
    {
      main: "Informazioni",
      /*       mainLink: "", */
      subsections: [
        {
          title: "Informazioni su FIFA 23",
          subTitles: [
            {
              title: "VOLTA",
              link: "https://www.ea.com/it-it/games/apex-legends/about",
            },
            {
              title: "Colonna Sonora",
              link: "https://www.ea.com/it-it/games/apex-legends/about/characters",
            },
            {
              title: "Ambasciatori",
              link: "https://www.ea.com/it-it/games/apex-legends/maps",
            },
            {
              title: "Vantaggi EA Play",
              link: "https://www.ea.com/it-it/games/apex-legends/about/frequently-asked-questions",
            },
            {
              title: "Realismo Senza Paragoni",
              link: "https://www.ea.com/it-it/games/apex-legends/about/pc-system-requirements",
            },
          ],
        },
      ],
    },
    {
      main: "Caratteristiche",
      /*       mainLink: "", */
      subsections: [
        {
          /*           title: "", */
          subTitles: [
            {
              title: "Panoramica Caratteristiche",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
            {
              title: "Caratteristiche di Gioco",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/battle-royale",
            },
            {
              title: "Hypermotion 2",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
            {
              title: "Esperienza Partita",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/battle-royale",
            },
            {
              title: "Squadre Femminili",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
          ],
        },
      ],
    },
    {
      main: "Ultimate Team",
      /*       mainLink: "", */
      subsections: [
        {
          /*           title: "", */
          subTitles: [
            {
              title: "Informazioni su Ultimate Team",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
            {
              title: "Eroi FUT",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/battle-royale",
            },
            {
              title: "Giocatore del Mese",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
            {
              title: "Valutazioni",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/battle-royale",
            },
            {
              title: "ICONE",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
            {
              title: "Da Tenere d'Occhio",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
            {
              title: "Web App di FUT",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
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
          /*           title: "", */
          subTitles: [
            {
              title: "Pacchetti Club",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
            {
              title: "Forum",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/battle-royale",
            },
            {
              title: "Carta del Gioco Positivo",
              link: "https://www.ea.com/it-it/games/apex-legends/modes/arenas",
            },
          ],
        },
      ],
    },
    {
      main: "Notizie e Contenuti Multimediali",
      /*       mainLink: "", */
      subsections: [
        {
          /*           title: "", */
          subTitles: [
            {
              title: "Notizie su FIFA 23",
              link: "https://www.ea.com/it-it/games/apex-legends/news",
            },
            {
              title: "Note degli Sviluppatori",
              link: "https://www.ea.com/it-it/games/apex-legends/news#game-updates",
            },
            {
              title: "Aggiornamenti Via Email",
              link: "https://www.ea.com/it-it/games/apex-legends/media",
            },
          ],
        },
      ],
    },
  ],
  buyButtonConfig: {
    eaApp: "https://www.ea.com/it-it/games/fifa/fifa-23/buy/pc",
    steam: "https://store.steampowered.com/app/1811260",
    ps5: "https://www.ea.com/it-it/games/fifa/fifa-23/buy/playstation",
    xbox: "https://www.ea.com/it-it/games/fifa/fifa-23/buy/xbox",
    switch:
      "https://www.nintendo.com/store/products/ea-sports-fifa-23-nintendo-switch-legacy-edition-switch/",
    egs: "https://lnk.to/fifa-23-epic-launch",
  },
};

export default FifaConfig;

/*      Come usare config per NavigationBar

import config from "../src/components/config/NomeDelGiocoConfig";

      <NavigationBar
        navColor={config.navColor}
        textColor={config.textColor}
        burgerColor={config.burgerColor}
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
