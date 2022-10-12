import {useNavigate} from "react-router-dom";
import Button from "../../components/shared/Button";
import Card from "../../components/shared/Card";
import CardGrid from "../../components/shared/CardGrid";
import TextWrap from "../../components/shared/TextWrap";
import Anchor from "./Anchor";
import Image from "./Image";
import PresentationSection from "./PresentationSection";

function Presentation() {
  const navigate = useNavigate();
  const eventHandler = (e: any) => {
    const page = e.currentTarget.name;
    navigate(`/${page}`);
  };

  return (
    <div className="absolute w-full bg-slate-600 z-[99999999] top-0">
      <PresentationSection title="che cos'è questo progetto e come abbiamo iniziato">
        questo è un progetto scolastico realizzato per develhope a scopo didattico. è una replica del sito electronic arts, sviluppato in
        ambiente agile da un team composto da 4 studenti. <br /> abbiamo iniziato creando il progetto su{" "}
        <Anchor url="https://github.com/Folvin/ea-react-project-team4/tree/develop">github</Anchor>.
        <br />
        abbiamo deciso immediatamente di utilizzare sia typescript che tailwind essendo che era sia una buona occasione per impararli meglio
        ma anche perche ne abbiamo riconosciuto l'utilità
      </PresentationSection>

      <PresentationSection title="inizializzazione struttura">
        una volta creato il progetto abbiamo subito messo giu una piccola base strutturale per quanto riguarda l'ordinamento delle cartelle,
        quindi semplicemente una cartella per le components e un file index in cui viene inizializzata la root per react che all'interno
        renderizza il BrowserRouter e al suo interno una component chiamata Routing.tsx dove dentro ci andranno tutte le route abbiamo anche
        deciso fin da subito una struttura di branch e di{" "}
        <Anchor url="https://github.com/Folvin/ea-react-project-team4/tree/develop#naming-convention">naming</Anchor> che stiamo utilizzando
        anche tutt'ora
        <div className="mt-4 flex justify-center">
          <Image file="first-structure.jpg" />
        </div>
      </PresentationSection>

      <PresentationSection title="design system e workflow">
        abbiamo cominciato a guardare attentamente la pagina di EA per riuscire a capire quali elementi di design potessero essere
        trasformati in component riutilizzabili per comporre ogni pagina e siamo giunti ad alcune conclusioni tra cui il fatto che molte
        delle cose fatte nel sito originale erano incosistenti per esempio alcune spaziature erano piu grandi e altre piu piccole. quindi
        piuttosto che copiare quello che hanno fatto loro abbiamo cominciato a pensare a come migliorare su questo aspetto e abbiamo
        cominciato a lavorare a queste component che abbiamo poi raggruppato in una cartella chiamata shared in quanto component
        riutilizzabili e "condivise" da tutti. <br />
        qui si è subito posto un problema e cioè visto che dovevamo lavorare su delle cose in comune, senza organnizarsi c'era il rischio di
        fare piu volte lo stesso lavoro o addirrittura creare conflitti. per questo abbiamo deciso di lavorare in una maniera da essere
        organizzati ma soprattutto lavorare in un ambiente{" "}
        <Anchor url="https://github.com/Folvin/ea-react-project-team4/tree/develop#workflow">agile.</Anchor>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <Button className="bg-cyan-300 border-black" url="#">
              button component
            </Button>
            <Button className="bg-slate-400 border-red-700" url="#">
              button component 2
            </Button>
            <Button className="bg-orange-300 border-blue-600" url="#">
              button component 3
            </Button>
          </div>
          <div className="flex-1 border-black border-2">
            <TextWrap>
              <p>im a text</p> <p>im also a text</p> <p>here is another one</p>
              <p>this one is veeeeeeery looooong</p> <p>this text likes you</p> <p>hellooo!</p>
            </TextWrap>
          </div>
          <div className="flex-1">
            <CardGrid columns="grid-cols-2">
              <Card>
                <Image file="nebula.webp" />
                <div className="p-2">im an amazing nebula!</div>
              </Card>

              <Card>
                <Image file="nebula.webp" />
                <div className="p-2">also theese cards are really neat</div>
              </Card>
            </CardGrid>
          </div>
        </div>
      </PresentationSection>

      <PresentationSection title="modernizzazione struttura">
        con il progetto che cresceva e le component che aumentavano chiaramente abbiamo dovuto aggiornare la{" "}
        <Anchor url="https://github.com/Folvin/ea-react-project-team4/tree/develop#about-the-structure">struttura</Anchor> di conseguenza in
        modo tale da permettere comunque un ordine costante nel progetto e anche una chiarezza immediata senza perdersi troppo nelle
        cartelle.
        <div className="mt-4 flex justify-center">
          <Image file="modern-structure.jpg" />
        </div>
      </PresentationSection>

      <PresentationSection title="le nostre pagine">
        abbiamo costruito le pagine utilizzando le component create e definendo i contenuti tramite un file di config in questo modo se si
        volesse in fututo andare a modificare dei pezzi di contenuto è possibile farlo senza andare a toccare il codice delle componenti che
        puo risultare piu complicato
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button name="F1" className="bg-[#ff9a3a] p-2 cursor-pointer w-full sm:w-auto" onClick={eventHandler}>
            Formula 1
          </button>
          <button name="apex" className="bg-[#000000] text-white p-2 cursor-pointer w-full sm:w-auto" onClick={eventHandler}>
            Apex legends
          </button>
          <button name="lost-in-random" className="bg-[#4D4A8A] text-white p-2 cursor-pointer w-full sm:w-auto" onClick={eventHandler}>
            Lost in random
          </button>
          <button
            name="homepage"
            className="bg-gradient-to-r from-indigo-800 to-fuchsia-600 text-white p-2 cursor-pointer w-full sm:w-auto"
            onClick={eventHandler}>
            homepage
          </button>
        </div>
      </PresentationSection>

      <PresentationSection title="elementi di design rivisitati">
        come detto in precedenza, il design del sito originale poteva essere migliorato e cosi abbiamo fatto mantenendo consistenza
        all'interno delle nostre pagine e anche modificando leggermente alcune strutture che erano di dubbia utilità.
        <div id="original" className="flex flex-col max-w-[220px] lg:max-w-none mx-auto gap-4 lg:flex-row justify-between mt-8">
          <Image className="" file="original-nav-buy-button-apex.png" />
          <Image className="" file="original-nav-buy-button-f1.png" />
          <Image className="" file="original-nav-buy-button-LIR.png" />
        </div>
        <hr className="border-8 my-6 border-green-400" />
        <div id="our" className="flex flex-col max-w-[220px] lg:max-w-none mx-auto gap-4 lg:flex-row justify-between">
        <Image className="" file="our-nav-buy-button-apex.png" />
          <Image className="" file="our-nav-buy-button-f1.png" />
          <Image className="" file="our-nav-buy-button-LIR.png" />
        </div>
      </PresentationSection>
    </div>
  );
}

export default Presentation;
