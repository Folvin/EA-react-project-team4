import Section from "../shared/Section";
import TextWrap from "../shared/TextWrap";
import { Link } from 'react-router-dom';

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
        <div>
          <p className="pb-4 tracking-tight">*SI APPLICANO CONDIZIONI, LIMITAZIONI ED ESCLUSIONI. CONSULTARE https://tos.ea.com/legalapp/eaplay/US/it/PC/ PER I DETTAGLI.</p>
          <hr style={{ borderColor: 'gray' }} />
          <p className="pb-4 text-sm">**L'offerta scade il 30 settembre 2022 alle ore 10:00 PT. Solo per i nuovi abbonati. Dopo il primo mese, l'abbonamento si rinnoverà automaticamente ogni mese al prezzo attuale dell'abbonamento mensile fino all'annullamento.</p>
          <hr style={{ borderColor: 'gray' }} />
        </div>
        <LocalFooterLinks arr={links} />
      </div>
    </Section>
  )
}


interface Props {
  name: string;
  path?: any;
}

function LocalFooterLinks({ arr }: { arr: Array<Props> }) {
  return (
    <TextWrap>
      {arr.map((link, index) => {
        return <Link to={link.path} key={index} className='hover:text-red-600'>{link.name}</Link>
      })}
    </TextWrap>
  )
}

export default LocalFooterEa;