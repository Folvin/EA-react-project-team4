import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTwitch } from 'react-icons/fa';
import { LocalFooterType } from './Interfaces';

//CONFIG FILE FOR LOCALFOOTER HOMEPAGE


const config: LocalFooterType = {
  bgColor: 'bg-gray-200', //LocalFooter background Color
  textColor: 'text-black', //LocalFooter Text Color and Social media icon color
  linkColor: 'text-black', //LocalFooter Link color
  hover: 'hover:text-red-600', // Color hover LocalFooter Link

  //LocalFooter Link
  title: '',
  links: [ 
    { name: 'Lavora con noi', path: '#' },
    { name: 'Dirigenza', path: '#' },
    { name: "Rapporto sull'impatto", path: '#' },
    { name: 'Attività politiche', path: '#' },
    { name: 'Segnala un problema', path: '#' },
    { name: 'Dichiarazione globale sul rispetto dei diritti umani', path: '#' },
    { name: 'Sicurezza e privacy', path: '#' },
  ],
  
  //Condition and Disclaimer
  condition: [ 
    {
      id: 1,
      value: `*SI APPLICANO CONDIZIONI, LIMITAZIONI ED ESCLUSIONI. CONSULTARE https://tos.ea.com/legalapp/eaplay/US/it/PC/ PER I DETTAGLI.`
    },
    {
      id: 2,
      value: "**L'offerta scade il 30 settembre 2022 alle ore 10:00 PT. Solo per i nuovi abbonati. Dopo il primo mese, l'abbonamento si rinnoverà automaticamente ogni mese al prezzo attuale dell'abbonamento mensile fino all'annullamento."
    }
  ],

  // Social Media Icon. 
  social: [  
    {
      icon: <FaFacebookF size={20} />,
      link: 'https://www.facebook.com/ea.it/?brand_redir=68678914189'
    },
    {
      icon: <FaTwitter size={20} />,
      link: 'https://www.twitter.com/ea'
    },
    {
      icon: <FaYoutube size={20} />,
      link: 'https://www.youtube.com/EAvideos'
    },
    {
      icon: <FaInstagram size={20} />,
      link: 'https://www.instagram.com/ea'
    },
    {
      icon: <FaTwitch size={20} />,
      link: 'https://www.twitch.tv/ea'
    }
  ]
}

export default config;