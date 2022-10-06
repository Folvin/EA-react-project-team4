import {Config} from '../../components/config/Interfaces';



//Hero banner configuration
export const F1ConfigBanner = {
  logo: 'assets/pages/f1-ea/f122-black-logo.png',
  background: 'bg-f1-orange-banner',
  title: {
    value: 'SPETTACOLARI LIVREE DEBUTTANO NELLA SERIE 2 DEL PASS PODIO.',
    font: 'font-f1-bold',
  },
  button: {
    value: 'Altre informazioni',
    font: 'font-f1-regular',
    bgColor: 'bg-slate-100',  //#f1f5f9
  }
};

//Video section configuration
export const F1ConfigVideoSection = {
  button: {
    buttonOne: {
      value: 'Acquista ora',
      font: 'font-f1-regular',
      bgColor: 'bg-orange-400'
    },
    buttonTwo: {
      value: 'Guarda il trailer',
      font: 'font-f1-regular',
      bgColor: ''
    },
  },
  article: {
    title: {
       value: "GAREGGIA CON LA LIVREA SPECIALE PER IL GP D'ITALIA",
       font: 'font-f1-bold',
    },
    subTitle: { 
       value: 'Disponibile ora nel gioco per tutti i giocatori',
       font: 'font-f1-regular'
    },
  },
  video: {
    url: 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-2022/common/homepage-hero-ferrari/f122-ferrari-homepage-3x2-l-m-1455x970.mp4',
    type: 'video/mp4',
  }, 
  logo: {
    url: 'assets/pages/f1-ea/f122-black-logo.png',
    description: 'Logo F122 white'
  } 
}



const F1Config: Config = {
  navColor: "bg-black" /* classe tailwind */,
  textColor: "text-white" /* classe tailwind */,
  hoverColor:
    "hover:text-red-600" /* hoverColor e buyButtonColor corrispondono sempre, ma sono separati perché usano due classi tailwind diverse */,
  buyButtonColor: "bg-red-600",
  burgerColor: "#FFFFFF",
  logo: "assets/core/EANavIcon.png",
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

export default F1Config;
