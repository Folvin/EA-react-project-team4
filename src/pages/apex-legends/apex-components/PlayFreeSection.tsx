import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";

function PlayFreeSection() {
  return (
    <div className="bg-cover bg-[url('../public/assets/pages/apex-legends/play-free-section.jpg')]">
      <Section className="py-12 px-[16%] flex flex-col justify-center items-center gap-10">
        <img src="assets/pages/apex-legends/apex-platform-logos.svg" alt="logos" />
        <div className={`font-teko text-white text-4xl lg:text-5xl text-center`}>GIOCA GRATIS*</div>
        <div className={`font-tt-regular text-white text-lg lg:text-xl text-center`}>
          Su PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch e PC tramite
          Origin e Steam.
        </div>
        <div className={`flex gap-6 flex-col w-full lg:flex-row lg:justify-around`}>
          <Button
            url="#"
            className={`bg-red-600 font-tt-regular min-w-[100%] border-none md:py-4 lg:px-8 text-unset text-white`}>
            <div className="text-white font-tt-regular">GIOCA GRATIS ORA</div>
          </Button>
        </div>
        <div className={`font-tt-regular text-white text-sm lg:text-base text-center`}>
          *Potrebbero essere richiesti l'account e l'abbonamento (venduto separatamente) della
          relativa piattaforma. Richiede un account EA e una connessione a Internet stabile. Si
          applicano restrizioni di età. Contiene acquisti all'interno del gioco.
        </div>
      </Section>
    </div>
  );
}

export default PlayFreeSection;
