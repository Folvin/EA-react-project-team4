import {Link} from "react-router-dom";
import SelectBox from "../shared/SelectBox";
import TextWrap from "../shared/TextWrap";
import SelectBoxData from "./SelectBoxData";

const nations = [
  {id: 1, name: "Italia"},
  {id: 2, name: "Belgio"},
  {id: 3, name: "Bulgaria"},
  {id: 4, name: "Croazia"},
  {id: 5, name: "Cipro"},
  {id: 6, name: "Republica Ceca"},
  {id: 7, name: "Danimarca"},
  {id: 8, name: "Estonia"},
  {id: 9, name: "Finlandia"},
  {id: 10, name: "Francia"},
  {id: 11, name: "Germania"},
  {id: 12, name: "Grecia"},
  {id: 13, name: "Ungheria"},
  {id: 14, name: "Islanda"},
  {id: 15, name: "Irlanda"},
  {id: 16, name: "Austria"},
  {id: 17, name: "Lettonia"},
  {id: 18, name: "Liechtenstein"},
  {id: 19, name: "Lituania"},
  {id: 20, name: "Lussemburgo"},
  {id: 21, name: "Malta"},
  {id: 22, name: "Paesi Bassi"},
  {id: 23, name: "Norvegia"},
  {id: 24, name: "Polonia"},
  {id: 25, name: "Portogallo"},
  {id: 26, name: "Romania"},
  {id: 27, name: "Slovenia"},
  {id: 28, name: "Spagna"},
  {id: 29, name: "Svezia"},
  {id: 30, name: "Svizzera"},
];
const language = [
  {id: 1, name: "Italia", img: "assets/global/country-flag/italy.png"},
  {
    id: 2,
    name: "United Kingdom",
    img: "assets/global/country-flag/united-kindom.png",
  },
  {id: 3, name: "Australia", img: "assets/global/country-flag/australia.png"},
  {
    id: 4,
    name: "United States",
    img: "assets/global/country-flag/united-states.png",
  },
  {id: 5, name: "France", img: "assets/global/country-flag/france.png"},
  {id: 6, name: "Deutschland", img: "assets/global/country-flag/Germany.png"},
  {
    id: 7,
    name: "United States",
    img: "assets/global/country-flag/united-states.png",
  },
  {id: 8, name: "日本", img: "assets/global/country-flag/japan.png"},
  {id: 9, name: "Polska", img: "assets/global/country-flag/poland.png"},
  {id: 10, name: "Brasil", img: "assets/global/country-flag/brazil.png"},
  {id: 11, name: "Россия", img: "assets/global/country-flag/russia.png"},
  {id: 12, name: "España", img: "assets/global/country-flag/spain.png"},
  {
    id: 13,
    name: "Česká republika",
    img: "assets/global/country-flag/czech.png",
  },
  {id: 14, name: "Canada (En)", img: "assets/global/country-flag/canada.png"},
  {id: 15, name: "Canada (Fr)", img: "assets/global/country-flag/canada.png"},
  {id: 16, name: "Danmark", img: "assets/global/country-flag/Denmark.png"},
  {id: 17, name: "Suomi", img: "assets/global/country-flag/finland.png"},
  {id: 18, name: "Mèxico", img: "assets/global/country-flag/mexico.png"},
  {
    id: 19,
    name: "Nederland",
    img: "assets/global/country-flag/Netherlands.png",
  },
  {id: 20, name: "Norge", img: "assets/global/country-flag/norge.png"},
  {id: 21, name: "Sverige", img: "assets/global/country-flag/svezia.png"},
  {id: 22, name: "中国", img: "assets/global/country-flag/china.png"},
  {id: 23, name: "대한민국", img: "assets/global/country-flag/korea.png"},
  {id: 24, name: "Arab", img: "assets/global/country-flag/arab.png"},
  {id: 25, name: "Türkiye", img: "assets/global/country-flag/turkey.png"},
];

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

          <SelectBox className="flex-1">
            <SelectBoxData title="Prezzi Regionali" arr={nations} />
          </SelectBox>

          <SelectBox className="flex-1">
            <SelectBoxData title="Lingua" arr={language} />
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
