/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import {useEffect, useState} from "react";
import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";

interface CarteType {
  id: number;
  src: string;
  covered: boolean;
  nrCarta: number;
  indovinata: boolean;
}

interface satoCarteType {
  coperta: string;
  indovinata: string;
}

// const CarteNuove: CarteType[] = [
//   {
//     id: 1,
//     src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-hammer-of-two-image.png",
//     covered: true,
//     indovinata: false,
//     nrCarta: 0,
//   },
//   {
//     id: 1,
//     src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-hammer-of-two-image.png",
//     covered: true,
//     indovinata: false,
//     nrCarta: 1,
//   },
//   {
//     id: 2,
//     src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-master-card-image.png",
//     covered: true,
//     indovinata: false,
//     nrCarta: 2,
//   },
//   {
//     id: 2,
//     src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-master-card-image.png",
//     covered: true,
//     indovinata: false,
//     nrCarta: 3,
//   },
//   {
//     id: 3,
//     src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-explosive-dice-image.png",
//     covered: true,
//     indovinata: false,
//     nrCarta: 4,
//   },
//   {
//     id: 3,
//     src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-explosive-dice-image.png",
//     covered: true,
//     indovinata: false,
//     nrCarta: 5,
//   },
//   {
//     id: 4,
//     src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-ooma-s-blessing-image.png",
//     covered: true,
//     indovinata: false,
//     nrCarta: 6,
//   },
//   {
//     id: 4,
//     src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-ooma-s-blessing-image.png",
//     covered: true,
//     indovinata: false,
//     nrCarta: 7,
//   },
// ];

const statoCarta: satoCarteType = {
  coperta:
    "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/match-puzzle/lir-card-back-puzzle.png",
  indovinata:
    "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-hand-dice-element.svg",
};

function CardGame() {
  // 4 coppie di carte
  const [Carte, setCarte] = useState<CarteType[]>([
    {
      id: 1,
      nrCarta: 0,
      covered: true,
      indovinata: false,
      src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-hammer-of-two-image.png",
    },
    {
      id: 1,
      nrCarta: 1,
      covered: true,
      indovinata: false,
      src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-hammer-of-two-image.png",
    },
    {
      id: 2,
      nrCarta: 2,
      covered: true,
      indovinata: false,
      src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-master-card-image.png",
    },
    {
      id: 2,
      nrCarta: 3,
      covered: true,
      indovinata: false,
      src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-master-card-image.png",
    },
    {
      id: 3,
      nrCarta: 4,
      covered: true,
      indovinata: false,
      src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-explosive-dice-image.png",
    },
    {
      id: 3,
      nrCarta: 5,
      covered: true,
      indovinata: false,
      src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-explosive-dice-image.png",
    },
    {
      id: 4,
      nrCarta: 6,
      covered: true,
      indovinata: false,
      src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-ooma-s-blessing-image.png",
    },
    {
      id: 4,
      nrCarta: 7,
      covered: true,
      indovinata: false,
      src: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/cards/lir-game-ooma-s-blessing-image.png",
    },
  ]);

  //uso questo state solo all'inizio per mesoclare le carte
  const [carteMescoate, setCarteMescoate] = useState<boolean>(false);
  // state usato per carte identiche
  const [carteScoperte, setCarteScoperte] = useState<number[]>([]);
  //per sapere quando il gioco e finito e posso renderizzare la seconda img
  const [carteIndovinate, setCarteIndovinate] = useState<number>(0);
  //con questo do il tempo all'animazione di essere eseguita
  const [finito, setFinito] = useState<boolean>(false);
  //serve per non incrementare i vari contatori cliccando sulla stessa carta
  const [singleClick, setSingleClick] = useState<number>(9);
  //per gestire l'animazione una volta finito il gioco
  const [animation, setAnimation] = useState<string>("");

  //mescola le carte
  useEffect(() => {
    shuffle(Carte);
    setCarteMescoate(true);
  }, []);

  //si attiva a gioco completato (animazione e cambio img)
  useEffect(() => {
    if (carteIndovinate === Carte.length) {
      setAnimation("animate-spin");
      setTimeout(() => {
        setFinito(true);
      }, 1000);
    }
  }, [carteIndovinate]);

  useEffect(() => {
    if (carteScoperte.length >= 2) {
      setTimeout(() => {
        copriCarte();
      }, 400);
    }
  }, [carteScoperte]);

  //mescola le carte
  function shuffle(array: Array<{}>) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  //funzione eseguita al click dulla carta
  function onClickCard(event: any) {
    let nrCarta = event.target.alt;
    let carta = Carte.find((element) => {
      return element.nrCarta == nrCarta;
    });
    //se clicco piu volte sulla stessa carta una volta scopera esco dalla funzione
    if (singleClick === nrCarta) {
      return;
    }
    //salvo la carta cliccata
    setSingleClick(nrCarta);

    //@ts-ignore
    setCarteScoperte([...carteScoperte, carta?.id]);

    //al click su carte indovinate esco dalla funz
    const indovinata = cartaIndovinata(event);
    if (indovinata) {
      return;
    }

    mostraCarta(event);
  }

  //mostra la carta al click, (usata in onClickCard)
  function mostraCarta(event: any) {
    const nrCarta = event.target.alt;
    const objIndex = Carte.findIndex((carta) => carta.nrCarta == nrCarta);
    setCarte(
      Carte.map((element, index) => {
        if (index === objIndex) {
          return {...element, covered: false};
        }
        return element;
      })
    );
  }

  //return true carta indovinata false altrimenti
  function cartaIndovinata(event: any) {
    const nrCarta = event.target.alt;
    const carta = Carte.find((obj) => {
      return obj.nrCarta == nrCarta;
    });
    return carta?.indovinata;
  }

  //copre tutte (2) le carte ad eccezzione di quelle indovinate
  function copriCarte() {
    if (carteScoperte[0] === carteScoperte[1]) {
      setCarteIndovinate(carteIndovinate + 2);
      setCarte(
        Carte.map((element) => {
          if (element.id === carteScoperte[0]) {
            return {...element, indovinata: true, covered: false, src: statoCarta.indovinata};
          }
          return element;
        })
      );
    } else {
      setCarte(
        Carte.map((carta) => {
          if (carta.indovinata === true) {
            return {...carta, covered: false};
          }
          return {...carta, covered: true};
        })
      );
    }
    setCarteScoperte([]);
    setSingleClick(9);
  }

  return (
    <Section>
      {/* Titolo e immagine */}
      <div className="pb-10">
        <h4 className="text-3xl text-white text-center py-10 lg:text-[40px]">
          La tua avventura inizierà presto
        </h4>
        <img
          src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/lir-homepage-element-2.png"
          alt=""
          className="m-auto py-5"
        />
      </div>

      {/* LA grid con le carte */}
      {!finito ? (
        <div className=" grid gap-1 grid-cols-4 grid-rows-2 max-w-[1024px] m-auto">
          {carteMescoate
            ? Carte.map((carta, index) => {
                return (
                  <div className={`max-w-[300px] flex justify-center items-center ${animation}`}>
                    <img
                      src={carta.covered ? statoCarta.coperta : carta.src}
                      alt={`${carta.nrCarta}`}
                      onClick={onClickCard}
                      key={index}
                      className="m-auto hover:cursor-pointer  hover:shadow-[inset_3px_5px_30px_#291F24] "
                    />
                  </div>
                );
              })
            : null}
        </div>
      ) : (
        <div>
          <img
            src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-reward-image-screenshot.png.adapt.crop16x9.320w.png"
            alt={"Gioco FInito"}
            srcSet="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-reward-image-screenshot.png.adapt.crop16x9.320w.png 320w,https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-reward-image-screenshot.png.adapt.crop16x9.767w.png 768w,https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-reward-image-screenshot.png.adapt.crop16x9.1023w.png 1024w,https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-reward-image-screenshot.png.adapt.crop16x9.1455w.png 1120w"
            className="max-w-6xl m-auto"
          />
          <p className="text-center text-white py-7 lg:text-lg">
            Scopri di più sulle carte che raccoglierai nel corso della tua avventura in Lost in
            Random.
          </p>
          <Button url="#" className="bg-transparent m-auto">
            <div className="text-white lg:text-lg">Visualizza le carte </div>
          </Button>
        </div>
      )}
    </Section>
  );
}

export default CardGame;
