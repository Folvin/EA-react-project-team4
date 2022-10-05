import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";
import {TbPlayerPlay} from "react-icons/tb";

function ApexHeroSection() {
  return (
    <div>
      <div id="top-spacer" className=" bg-[#90E9D7] h-[96px]"></div>
      {/*       <div className="min-w-[320px] max-w-[767px] max-h-[1000px] h-auto bg-cover bg-[url('https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.320w.jpg')]"> */}
      <Section className="relative min-w-[320px] h-[120vh] sm:h-[140vh] md:hidden ">
        <img
          className="min-w-[320px] 2xl:max-h-[577] absolute left-0 w-full z-[-1]"
          alt="hero"
          srcSet="https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.320w.jpg 320w, https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.768w.jpg 768w, https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.1024w.jpg 1024w, https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.1456w.jpg 1320w, https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.1920w.jpg 1456w"
          src="https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.320w.jpg"
        />
        <div className="h-full flex flex-col justify-center relative">
          <div className="w-full pb-10"></div>
          <div className="w-full flex flex-col gap-5 justify-between pt-[65%] items-center">
            <img
              src="assets/core/apex-white-nav-logo.svg"
              alt=""
              className="min-w-[120px] max-w-[160px]"
            />
            <div className="font-tt-regular text-sm sm:text-lg text-center text-white">
              Per PlayStation®4, PlayStation®5, Xbox One, Xbox Series X|S, Nintendo Switch e PC
              tramite Origin e Steam.
            </div>
            <div className="w-full flex flex-col sm:justify-center sm:items-center gap-3">
              <Button className="bg-red-600 border-none h-[50px]" url="/apex/playnow">
                <div className="font-tt-regular p-2 text-base text-center text-white">
                  GIOCA GRATIS ORA*
                </div>
              </Button>
              <Button
                className="bg-red-600 flex justify-center items-center border-none h-[50px]"
                url="/apex/trailer">
                <div className="font-tt-regular p-2 text-base text-center text-white">
                  GUARDA IL TRAILER
                </div>
                <TbPlayerPlay className="text-white" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Section className="relative min-w-[320px] min-h-[488px] max-h-[545px] md:min-h-[545px] lg:min-h-[601px] lg:max-h-[545px] 2xl:max-h-[850px] h-[70vh] hidden md:flex justify-center px-0">
        <img
          className="min-w-[320px] lg:min-h-[601px] md:min-h-[545px] md:max-h-[583px] 2xl:max-h-[750px] absolute left-0 w-full z-[-1]"
          alt="hero"
          srcSet="https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.320w.jpg 320w, https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.768w.jpg 768w, https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.1024w.jpg 1024w, https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.1456w.jpg 1320w, https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.1920w.jpg 1456w"
          src="https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/apex-section-bg-hunted-season-return-user-xl.jpg.adapt.320w.jpg"
        />
        <div className="flex flex-row justify-center items-center md:max-h-[583px]">
          <div className="w-full flex flex-col gap-5 justify-between lg:pr-[25%] xl:pr-[60%] items-center">
            <img
              src="assets/core/apex-white-nav-logo.svg"
              alt=""
              className="min-w-[120px] max-w-[160px] md:max-w-[185px] md:w-[185px] lg:max-w-[250px] lg:w-[250px]"
            />
            <div className="font-tt-regular text-base text-center text-white">
              Per PlayStation®4, PlayStation®5, Xbox One, Xbox Series X|S, Nintendo Switch e PC
              tramite Origin e Steam.
            </div>
            <div className="w-full flex flex-col xl:flex-row sm:justify-center sm:items-center gap-3">
              <Button className="bg-red-600 border-none h-[50px]" url="/apex/playnow">
                <div className="font-tt-regular p-2 text-base text-center text-white">
                  GIOCA GRATIS ORA*
                </div>
              </Button>
              <Button
                className="bg-red-600 flex justify-center items-center border-none h-[50px]"
                url="/apex/trailer">
                <div className="font-tt-regular p-2 text-base text-center text-white">
                  GUARDA IL TRAILER
                </div>
                <TbPlayerPlay className="text-white" />
              </Button>
            </div>
          </div>
          <div className="w-4/5 h-full"></div>
        </div>
      </Section>
    </div>
  );
}

export default ApexHeroSection;
