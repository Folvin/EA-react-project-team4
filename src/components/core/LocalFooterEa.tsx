import Section from "../shared/Section";
import TextWrap from "../shared/TextWrap";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTwitch } from 'react-icons/fa';


const links = [
  { name: 'Lavora con noi', path: '#' },
  { name: 'Dirigenza', path: '#' },
  { name: "Rapporto sull'impatto", path: '#' },
  { name: 'Attività politiche', path: '#' },
  { name: 'Segnala un problema', path: '#' },
  { name: 'Dichiarazione globale sul rispetto dei diritti umani', path: '#' },
  { name: 'Sicurezza e privacy', path: '#' },
]

function LocalFooterEa() {

  return (
    <Section className="bg-gray-200 py-8">
      <div>

        <div className="">
          <p className="py-4 tracking-tight">*SI APPLICANO CONDIZIONI, LIMITAZIONI ED ESCLUSIONI. CONSULTARE https://tos.ea.com/legalapp/eaplay/US/it/PC/ PER I DETTAGLI.</p>
          <hr style={{ borderColor: 'gray' }} />
          <p className="py-4 text-sm">**L'offerta scade il 30 settembre 2022 alle ore 10:00 PT. Solo per i nuovi abbonati. Dopo il primo mese, l'abbonamento si rinnoverà automaticamente ogni mese al prezzo attuale dell'abbonamento mensile fino all'annullamento.</p>
          <hr style={{ borderColor: 'gray' }} />
        </div>

        <div className="pt-20 flex flex-col xl:flex-row">
          <div className="">
            <LocalFooterLinks className='' arr={links} />
            <hr style={{ borderColor: 'gray' }} className='mt-4' />
          </div>
          <div className='py-4'>
            <span className="font-bold">Partecipa alla conversazione</span>
            <div className="flex gap-6 py-4">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ea.it/?brand_redir=68678914189"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaFacebookF size={'20'} />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.twitter.com/ea"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaTwitter size={'20'} />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/EAvideos"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaYoutube size={'20'} />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ea"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaInstagram size={'20'} />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/ea"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaTwitch size={'20'} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}


interface Props {
  name: string;
  path?: any;
}

function LocalFooterLinks({ arr, className }: { arr: Array<Props>, className: string }) {
  return (
    <TextWrap>
      {arr.map((link, index) => {
        return <Link to={link.path} key={index} className={`hover:text-red-600 ${className}`}>{link.name}</Link>
      })}
    </TextWrap>
  )
}

export default LocalFooterEa;