import Section from "../shared/Section";
import TextWrap from "../shared/TextWrap";
import { Link } from 'react-router-dom';


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
        <TextWrap >
          <Link to="#" className="hover:text-red-600">Lavora con noi</Link>
          <Link to="#" className="hover:text-red-600">Dirigenza</Link>
          <Link to="#" className="hover:text-red-600">Rapporto sull'impatto</Link>
          <Link to="#" className="hover:text-red-600">Attività ppolitiche</Link>
          <Link to="#" className="hover:text-red-600">Segnala un problema</Link>
          <Link to="#" className="hover:text-red-600">Dichiarazione globale sul rispetto dei diritti umani</Link>
          <Link to="#" className="hover:text-red-600">Sicurezza e privacy</Link>
        </TextWrap>

      </div>

    </Section>
  )
}

export default LocalFooterEa;