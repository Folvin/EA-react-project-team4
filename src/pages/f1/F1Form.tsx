import { useEffect, useState } from "react";
import Button from "../../components/shared/Button";
import SelectPaese from "../../components/shared/low-order-component/SelectPaese";

interface Props {
  buttonColor: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  bgCheck: string;
}

function F1Form({ buttonColor, bgColor, borderColor, textColor, bgCheck }: Props) {
  const [emailValue, setEmailValue] = useState("");
  const [mailSize, setMailSize] = useState("text-xl");
  const [checkBox, setCheckBox] = useState(false);
  const [dataNascita, setDataNascita] = useState("");
  const [coloreData, setColoreData] = useState("text-gray-500");

  function handleMailInput(event: any) {
    setEmailValue(event.target.value);
    if (emailValue) {
      setMailSize("text-sm");
    }
  }

  function handleCheckBox() {
    if (checkBox === true) {
      setCheckBox(false);
    } else {
      setCheckBox(true);
    }
  }

  useEffect(() => {
    if (dataNascita !== "") {
      setColoreData(textColor);
    } else {
      setColoreData("text-gray-500");
    }
  }, [dataNascita, textColor]);

  function handleDataNascitaInput(event: any) {
    setDataNascita(event.target.value);
  }

  return (
    <div className={`${textColor}`}>
      {/*E-mail */}
      <div
        className={`${bgColor} ${borderColor} h-16 group border-2 w-full rounded-sm mb-5 focus-within:text-sm focus-within:scale-105 hover:scale-105 ease-in-out duration-200`}>
        <div
          className={`${mailSize} bottom indent-4 w-24 group-hover:text-sm text-gray-500  ease-in-out duration-200`}>
          E-mail
        </div>
        <input
          type="email"
          className={`${textColor} indent-4 w-full h-11 text-lg bg-transparent focus:border-gray-50 `}
          name="email"
          onChange={handleMailInput}
        />
      </div>

      {/* contenitore data di nasctia e paesi */}
      <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5 justify-between">
        {/*Data di nascita */}
        <div
          className={`${bgColor} ${borderColor} group w-full   md:w-1/2 h-16 border-2 rounded focus-within:text-sm focus-within:scale-105 hover:scale-105 ease-in-out duration-200  `}>
          <div
            className={`${bgColor} text-lg bottom indent-4 group-hover:text-sm text-gray-500  ease-in-out duration-200`}>
            Data di nascita
          </div>
          <input
            className={`${coloreData} h-8 bg-transparent indent-2 w-full`}
            type="date"
            onChange={handleDataNascitaInput}
          />
        </div>

        {/* select box con i Paesi */}
        <div
          className={`${bgColor} ${borderColor} relative group border-2 rounded w-full md:w-1/2 h-16 flex justify-start flex-col focus-within:text-sm hover:scale-105 ease-in-out duration-200 `}>
          <div
            className={`${bgColor} text-xl bottom z-[1] indent-4 group-hover:text-sm text-gray-500  ease-in-out duration-200`}>
            Paese
          </div>
          <div className="absolute w-full top-4">
            <SelectPaese bgColor={bgColor} borderColor={borderColor} textColor={textColor} />
          </div>
        </div>
      </div>

      <div className="flex mt-4 font-f1-regular">
        <div
          className={`${borderColor} ${bgColor} border-2 rounded-sm w-12 h-4 md:w-8 md:h-4 mr-2 mt-1 flex justify-center items-center`}
          onClick={handleCheckBox}>
          {checkBox ? <div className={` ${bgCheck} w-full h-full z-10 `}></div> : null}
        </div>
        <p>
          Sì! Desidero ricevere e-mail sui prodotti, le novità, gli eventi e le promozioni di EA in conformità con la <span className="text-orange-400">Politica sulla privacy e sui cookie di EA.</span> Posso annullare l'iscrizione in qualsiasi momento, modificando le mie <span className="text-orange-400">preferenze e-mail</span>, inviando un'e-mail a privacy_policy@ea.com o scrivendo a Electronic Arts Inc., ATTN: Email Opt-Out, 209 Redwood Shores Pkwy, Redwood City, CA, 94065, USA.
        </p>
      </div>
      <div className="flex gap-6 flex-col md:flex-row pb-8 font-f1-regular py-4">
        <Button url='' className="bg-orange-400 min-w-[100%] border-orange-400 md:py-4 md:px-8">
          Iscriviti
        </Button>
      </div>
    </div>
  );
}

export default F1Form;
