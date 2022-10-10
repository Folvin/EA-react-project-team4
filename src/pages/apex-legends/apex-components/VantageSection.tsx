import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";

function VantageSection() {
  return (
    <div className="relative min-h-[300px] md:min-h-[450px] lg:h-[550px] 2xl:h-[690px] bg-none md:bg-center lg:bg-top md:bg-cover md:bg-[url('../public/assets/pages/apex-legends/vantage.jpg')]">
      <img className="md:hidden" alt="hero" src="assets/pages/apex-legends/vantage-mobile.jpg" />
      <Section className="relative md:absolute w-full h-full right-0 bg-black md:bg-transparent flex flex-col justify-end pb-8">
        <div className="flex flex-col items-center pt-6 gap-3 justify-center">
          <div
            className={`font-teko w-full text-white text-4xl lg:text-6xl text-center md:w-[350px] xl:w-[550px]`}>
            VANTAGE - MAESTRA DEI CECCHINI
          </div>

          <div
            className={`font-tt-regular w-full flex flex-col gap-y-4 text-white text-center md:w-[350px] xl:w-[550px]`}>
            <div className={`2xl:text-xl text-base md:text-lg`}>
              Cresciuta sull'arido pianeta ghiacciato di Págos, Vantage ha imparato a sue spese la
              dura arte della sopravvivenza.
            </div>
          </div>

          <div className={`flex gap-6 flex-col w-full lg:flex-row lg:justify-around`}>
            <Button
              url="#"
              className={`bg-transparent font-tt-regular min-w-[100%] md:py-4 lg:px-8 text-unset text-white`}>
              <div className="text-white font-tt-regular">Scopri di più</div>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default VantageSection;
