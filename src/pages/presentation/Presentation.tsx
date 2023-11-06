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
      <PresentationSection title="Che cos'è questo progetto e come abbiamo iniziato">
        Questo è un progetto scolastico realizzato per DevelHope a scopo didattico. È una replica del sito Electronic Arts (EA), sviluppato
        in ambiente agile da un team composto da 4 studenti, il team è composto da Kevin Alessi, Cristian Rimbu, Andrea Sellan e Christian
        Silvestri. <br />
        abbiamo iniziato creando il progetto in locale, su{" "}
        <Anchor url="https://github.com/Folvin/ea-react-project-team4/tree/develop">GitHub</Anchor>.
        <br />
        abbiamo deciso di implementare sia typescript che tailwind, questo perche ci siamo subito resi conto che erano strumenti utili e
        comodi per quello che dovevamo fare ed era anche una buona occasione per impararli meglio.
      </PresentationSection>

      <PresentationSection title="Inizializzazione struttura">
        abbiamo cominciato a progettare un po la struttura del progetto e abbiamo creato uno scaffolding iniziale, divindendo
        l'inizializzazione della root di react presente in un file index.tsx e le rotte che sono in una component chiamata Routing.tsx dove
        dentro ci andranno tutte le route. <br /> abbiamo anche deciso fin da subito una struttura di branch e di{" "}
        <Anchor url="https://github.com/Folvin/ea-react-project-team4/tree/develop#naming-convention">Naming</Anchor>
        <div className="mt-4 flex justify-center">
          <Image file="first-structure.jpg" />
        </div>
      </PresentationSection>

      <PresentationSection title="Design system e workflow">
        Abbiamo cominciato ad osservare attentamente la pagina di EA per riuscire a capire quali elementi di design potessero essere
        trasformati in component riutilizzabili per comporre ogni pagina e siamo giunti alla seguente conclusione, cioè il fatto che molte
        delle parti fatte nel sito originale erano incosistenti, come per esempio alcune spaziature erano piu grandi e altre piu piccole o
        alcuni colori di elementi che dovrebbero essere unici. quindi piuttosto che copiare la loro pagina abbiamo cominciato a pensare a
        come migliorare aspetto e di conseguenza abbiamo cominciato a progettare queste component che abbiamo poi raggruppato in una
        cartella chiamata shared in quanto component riutilizzabili e "condivise" da tutti. <br />
        Qui si è subito posto un problema e cioè visto che dovevamo lavorare su delle parti in comune, senza organizzarsi c'era il rischio
        di fare piu volte lo stesso lavoro o addirrittura creare conflitti. per questo abbiamo deciso di lavorare organizzandoci in maniera
        da essere <Anchor url="https://github.com/Folvin/ea-react-project-team4/tree/develop#workflow">Agile.</Anchor>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <Button className="bg-cyan-300 border-black" url="#">
              Button Component
            </Button>
            <Button className="bg-slate-400 border-red-700" url="#">
              Button Component 2
            </Button>
            <Button className="bg-orange-300 border-blue-600" url="#">
              Button Component 3
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
        Con il progetto che cresceva e le component che aumentavano la{" "}
        <Anchor url="https://github.com/Folvin/ea-react-project-team4/tree/develop#about-the-structure">struttura</Anchor> chiaramente
        veniva aggiornata di conseguenza in modo tale da permettere comunque un ordine costante nel progetto e anche una chiarezza immediata
        senza perdersi troppo nelle cartelle. e in modo tale da poter implementare nuove feature nella maniera piu ordinata possibile.
        <div className="mt-4 flex justify-center">
          <Image file="modern-structure.jpg" />
        </div>
      </PresentationSection>

      <PresentationSection title="Le nostre pagine">
        Abbiamo costruito le pagine utilizzando le component create e definendo i contenuti tramite un file di config in questo modo se si
        volesse in fututo andare a modificare dei pezzi di contenuto è possibile farlo senza andare a toccare il codice delle componenti che
        puo risultare più complicato.
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button name="F1" className="bg-[#ff9a3a] p-2 cursor-pointer w-full sm:w-auto" onClick={eventHandler}>
            Formula 1
          </button>
          <button name="apex" className="bg-[#000000] text-white p-2 cursor-pointer w-full sm:w-auto" onClick={eventHandler}>
            Apex Legends
          </button>
          <button name="lost-in-random" className="bg-[#4D4A8A] text-white p-2 cursor-pointer w-full sm:w-auto" onClick={eventHandler}>
            Lost in Random
          </button>
          <button
            name="homepage"
            className="bg-gradient-to-r from-indigo-800 to-fuchsia-600 text-white p-2 cursor-pointer w-full sm:w-auto"
            onClick={eventHandler}>
            Homepage
          </button>
        </div>
      </PresentationSection>

      <PresentationSection title="Elementi di design rivisitati">
        Come detto in precedenza, il design del sito originale poteva essere migliorato e cosi abbiamo fatto mantenendo consistenza
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

      <PresentationSection title="scalabilità">
        Vorrei soffermarmi su un aspetto fondamentale del nostro progetto in quanto facilmente scalabile, in quanto è possibile creare ogni
        pagina semplicemente riutilizzando le component progettate e di conseguenza è possibile creare piu pagine nel giro di poco tempo
      </PresentationSection>
    </div>
  );
}

export default Presentation;
