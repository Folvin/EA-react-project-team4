import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";
import {TbPlayerPlay} from "react-icons/tb";

function ApexHeroSection() {
  return (
    <div className="relative min-h-[300px] md:min-h-[450px] lg:h-[550px] 2xl:h-[690px] bg-none md:bg-center lg:bg-top md:bg-cover md:bg-[url('https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.1920w.jpg')]">
      <img className="md:hidden" alt="hero" src="assets/pages/apex-legends/hero-mobile.png" />
      <Section className="relative md:absolute md:top-[4%] md:-left-[3%] lg:top-[10%] lg:-left-[5%] xl:top-[14%] xl:left-[0%] 2xl:left-[6%] bg-black md:bg-transparent pb-8 md:py-0">
        <div className="flex flex-col items-center gap-3 justify-center">
          <a href=" ">
            <img
              className="min-w-[120px] md:w-[200px] lg:w-[250px] xl:w-[320px] 2xl:w-[400px]"
              src="assets/core/apex-hero-medium-logo-light.svg"
              alt="logo-apex"
            />
          </a>

          <div
            className={`font-tt-regular flex flex-col gap-y-4 text-white text-center md:w-[350px] xl:w-[550px]`}>
            <div className={`2xl:text-xl text-base md:text-lg`}>
              Per PlayStation®4, PlayStation®5, Xbox One, Xbox Series X|S, Nintendo Switch e PC
              tramite Origin e Steam.
            </div>
          </div>

          <div className={`flex gap-6 flex-col w-full lg:flex-row lg:justify-around`}>
            <Button
              url="#"
              className={`bg-red-600 font-tt-regular min-w-[100%] border-none md:py-4 lg:px-8 text-unset text-white`}>
              <div className="text-white font-tt-regular">GIOCA ORA GRATIS</div>
            </Button>
            <Button
              url="#"
              className="bg-red-600 font-tt-regular min-w-[100%] flex justify-center items-center gap-3 border-none md:py-4 lg:px-8">
              <div className="text-white font-tt-regular">GUARDA IL TRAILER</div>
              <TbPlayerPlay className="text-white w-5 h-5" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default ApexHeroSection;
