import Section from "../../components/shared/Section";
import Button from "../../components/shared/Button";
import { F1ConfigVideoSection } from "./F1Config";

function VideoSection() {

  return (
    <div className="relative">

      {/* Video background manage */}
      <video autoPlay loop muted className=" w-full ">
        <source
          src={F1ConfigVideoSection.video.url}
          type={F1ConfigVideoSection.video.type} />
          Your browser does not support the video tag.
      </video>

      <Section className="md:absolute md:top-[150px] bg-black md:bg-transparent pt-16 2xl:pt-32 md:pt-2">
        <div>
          {/* Logo F1 manage */}
          <a href=' '>
            <img className="md:w-[357px] 2xl:w-[550px]"
              src={F1ConfigVideoSection.logo.url}
              alt={F1ConfigVideoSection.logo.description} />
          </a>

          {/* Article video Section */}
          <div className={`${F1ConfigVideoSection.article.title.font} pb-4 flex flex-col gap-y-4 text-white text-center md:text-left  md:w-[350px] xl:w-[550px]`}>
            <h1 className={`2xl:text-5xl text-3xl`} >
              {F1ConfigVideoSection.article.title.value}
            </h1>
            <h3 className={`${F1ConfigVideoSection.article.subTitle.font} 2xl:text-xl text-sm md:text-xl`}>
              {F1ConfigVideoSection.article.subTitle.value}
            </h3>
          </div>

          {/* Button video section manage */}
          <div className={`${F1ConfigVideoSection.button.buttonOne.font} flex gap-6 flex-col md:flex-row pb-8`}>
            <Button url="#" className={`${F1ConfigVideoSection.button.buttonOne.bgColor} min-w-[100%] border-orange-400 2xl:py-4 2xl:px-8`}>
              {F1ConfigVideoSection.button.buttonOne.value}
            </Button>
            <Button url="#" className="min-w-[100%] 2xl:py-4 px-8">
              {F1ConfigVideoSection.button.buttonTwo.value}
            </Button>
          </div>
        </div>

      </Section>
      
    </div>
  )
}

export default VideoSection;