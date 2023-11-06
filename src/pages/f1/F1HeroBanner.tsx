import Section from "../../components/shared/Section";
import Button from "../../components/shared/Button";
import { F1ConfigBanner } from "./F1Config";


function HeroBanner() {

  return (
    <Section className={`${F1ConfigBanner.background} xl:bg-right xl:bg-cover py-8 2xl:py-1`}>
      <div className={`${F1ConfigBanner.title.font} flex flex-col xl:flex-row 2xl:justify-between gap-10 2xl:px-60 justify-center`}>
        <div className="xl:max-w-[500px]">
          <h1 className="text-2xl 2xl:text-[26px] text-center xl:text-left">{F1ConfigBanner.title.value}</h1>
        </div>
        <div className=" sm:flex justify-center gap-x-8 items-center ">
          <div className='flex justify-center'>
            <a href=' '>
              <img src={F1ConfigBanner.logo} alt="" className="h-[35px] min-w-[150px] " />
            </a>
          </div>
          <div>
            <Button className={`${F1ConfigBanner.button.font} ${F1ConfigBanner.button.bgColor} py-3 2xl:py-4`} url="#">
              {F1ConfigBanner.button.value}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HeroBanner