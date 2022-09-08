import {Link} from "react-router-dom";
import SelectBox from "../SelectBox";
import TextWrap from "../TextWrap";

function TextAndSelect() {
  return (
    <div className="flex flex-col grow">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* top text list and select box */}

        <div className="grow-[5] shrink-0 basis-0">
          {/* top text list */}

          <TextWrap className="gap-y-5">
            <Link to="#">Libreria dei giochi</Link>
            <Link to="#">Registrati</Link>
            <Link to="#">Riscatta codice</Link>
            <Link to="#">Origin</Link>
            <Link to="#">Informazioni</Link>
            <Link to="#">Accessibilità</Link>
            <Link to="#">Aiuto</Link>
          </TextWrap>
        </div>

        <div className="grow-[4] min-w-[400px] basis-0 shrink-0 flex flex-col md:flex-row gap-8">
          {/* select box */}

          <SelectBox className="flex-1" title="Prezzi Regionali">
            italia
          </SelectBox>
          <SelectBox className="flex-1" title="Lingua">
            italia
          </SelectBox>
        </div>
      </div>

      <div className="text-sm mt-6 max-w-[640px]">
        {/* bot text list */}
        <TextWrap>
          <Link to="#">Note legali e privacy</Link>
          <Link to="#">Accordo con l'utente</Link>
          <Link to="#">
            Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)
          </Link>
          <Link to="#">Aggiornamenti sui servizi online</Link>
          <Link to="#">Terimini di servizio di YouTube</Link>
          <Link to="#">Norme sulla privacy di Google</Link>
          <Link to="#">Cookie Preferenze</Link>
        </TextWrap>
        <p className="mt-4">© 2022 Electronic Arts Inc.</p>
      </div>
    </div>
  );
}

export default TextAndSelect;
