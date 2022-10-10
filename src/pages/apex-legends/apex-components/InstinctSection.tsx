import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";

function InstinctSection() {
  return (
    <div className="relative min-h-[300px] md:min-h-[450px] lg:h-[550px] 2xl:h-[690px] bg-none md:bg-center lg:bg-top md:bg-cover md:bg-[url('../public/assets/pages/apex-legends/instinct.jpg')]">
      <img className="md:hidden" alt="hero" src="assets/pages/apex-legends/instinct-mobile.png" />
      <Section className="relative md:absolute right-0 bg-[url('../public/assets/pages/apex-legends/instinct-mobile-div.png')] md:bg-none pb-8 md:py-0 md:pt-[4%] lg:pt-[4%]">
        <div className="flex flex-col items-center pt-6 gap-3 justify-center">
          <div
            className={`font-teko text-white text-4xl lg:text-6xl text-center md:w-[350px] xl:w-[550px]`}>
            SCOPRI IL TUO ISTINTO DI SOPRAVVIVENZA
          </div>

          <div
            className={`font-tt-regular flex flex-col gap-y-4 text-white text-center md:w-[350px] xl:w-[550px]`}>
            <div className={`2xl:text-xl text-base md:text-lg`}>
              Colpiscili con il tuo colpo migliore nei panni di Vantage, una cecchina survivalista
              addestrato per sopravvivere alle condizioni più brutali. Esplora un Canyon dei Re
              ricostruito, e metti alla prova i tuoi limiti salendo di livello e sfidando il Pass
              battaglia Caccia.
            </div>
          </div>

          <div className={`flex gap-6 flex-col w-full lg:flex-row lg:justify-around`}>
            <Button
              url="#"
              className={`bg-red-600 font-tt-regular min-w-[100%] border-none md:py-4 lg:px-8 text-unset text-white`}>
              <div className="text-white font-tt-regular">Scopri di più</div>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default InstinctSection;
