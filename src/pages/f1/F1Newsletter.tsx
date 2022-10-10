import Section from "../../components/shared/Section";
import F1Form from "./F1Form";
import { F1ConfigNewsletter } from "./F1Config";

interface Props {
  game: string;
  bgColor: string;
  textColor: string;
  background: string;
}
// game = Nome del gioco da visuallizare nel titolo del Form,                                 ES: game="Lost in Random™"
// textColor = colore del testo di tutta la componenet                                        ES: textColor="text-white"
// bgColor = colore bg input del form (NON USARE TRANSPARENT)                           ES: bgColor="bg-gray-800"
// borderColor = colore del bordo input del form                                              ES: borderColor="border-white"
// bgCheck = il colore del check nel form che dovrebbe essere dello stesso colore del bordo   ES:  bgCheck="bg-white"
// buttonColor = colore del bottone "Registrati" alla fine del form                           ES: buttonColor="bg-violet-900"

/*
al section che contiene Newsletter tipo un div (o altri contenitori/tag) usate queste classi tailwind per impostare lo sfondo:
className="bg-cover bg-[url(https://media.contentapi.ea.com/content/dam/apex-legends/common/apex-page-bg-solid-beige.jpg.adapt.crop16x9.1455w.jpg)]"
dove l'url è limmagine di bg da usare
 */

function F1Newsletter({ game, bgColor, textColor, background }: Props) {
  return (
    <Section className={`py-20 2xl:px-[340px] ${background}`}>
      <div className=" flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 justify-center">
        <div className="w-full lg:w-2/4">
          <FormTitle gameTitle={game} textCoror={textColor} />
        </div>
        <div className="w-full lg:w-2/4">
          <F1Form
            bgColor={bgColor}
            textColor={textColor}
          />
        </div>
      </div>
    </Section>
  );
}

interface Props2 {
  gameTitle: string;
  textCoror: string;
}
//questa funzione è solo per il titolo e paragrafo del Form
function FormTitle({ gameTitle, textCoror }: Props2) {
  return (
    <div className={`${textCoror} font-f1-regular`}>
      <h2 className="font-f1-bold text-2xl mb-8 2xl:text-5xl">
        {F1ConfigNewsletter.article.title}  {gameTitle.toUpperCase()}
      </h2>
      <p className="">
        {F1ConfigNewsletter.article.description}{" "}
      </p>
    </div>
  );
}

export default F1Newsletter;
