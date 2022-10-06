import Section from "./Section";
import Form from "./low-order-component/Form";

interface Props {
  game: string;
  buttonColor: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  bgCheck: string;
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

function Newsletter({game, buttonColor, bgColor, borderColor, textColor, bgCheck}: Props) {
  return (
    <Section className="py-20">
      <div className=" flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 justify-center">
        <div className="w-full lg:w-2/4">
          <FormTitle gameTitle={game} textCoror={textColor} />
        </div>
        <div className="w-full lg:w-2/4">
          <Form
            buttonColor={buttonColor}
            bgColor={bgColor}
            borderColor={borderColor}
            textColor={textColor}
            bgCheck={bgCheck}
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
function FormTitle({gameTitle, textCoror}: Props2) {
  return (
    <div className={`${textCoror}`}>
      <h2 className="font-extrabold text-2xl mb-8">
        ISCRIVITI PER RICEVERE LE NOVITÀ DI {gameTitle.toUpperCase()}
      </h2>
      <p className="">
        Iscriviti oggi per ricevere tramite e-mail le ultime novità su {gameTitle} con
        aggiornamenti, contenuti dietro le quinte, offerte e molto altro (insieme alle novità su
        notizie, prodotti, eventi e promozioni EA).{" "}
      </p>
    </div>
  );
}

export default Newsletter;
