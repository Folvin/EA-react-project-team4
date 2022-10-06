import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";

function SecondSectionHomepage() {
  return (
    <Section>
      <div className=" flex flex-col items-center">
        <h2 className="text-center text-white text-xl lg:text-2xl mt-20 mb-2">ENTRA NEL</h2>
        <h3 className="text-center text-white text-3xl lg:text-4xl">MONDO DI RANDOM</h3>
        <img
          className="my-8 min-w-md"
          src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/lir-media-element-1.svg"
          alt=""
        />
        <p className="text-center text-white leading-6 pb-5 lg:w-3/4 lg:text-lg">
          Benvenuto nel mondo di Random, un regno oscuro dove il futuro di ogni
          cittadino è determinato dal lancio di un dado. Verrai sconfitto dal
          tuo destino o accoglierai il caos e imparerai a usarlo a tuo favore?
          Mettiti in viaggio con Even e il suo fedele compagno, Dicey, per
          sfidare il caso e spezzare la maledizione di Random.
        </p>
        <div className="w-full">
          <Button url="#" className="border-white bg-transparent m-auto">
            <div className="text-white  lg:text-lg">Leggi la Storia</div>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default SecondSectionHomepage;
