import Section from "../../components/shared/Section";



interface Props {
  id: number;
  imgMobile: string;
  imgDesktop: string;
  imgOrder: string;
  title: string;
  description: string;
  articleOrder: string;
}

function HeroContent({ config }: { config: Array<Props> }) {
  return (
    <div>
      {config.map((value, item) => {
        return (
          <>
            <div className="pt-16 pb-18 2xl:py-48 flex flex-col lg:flex-row lg:items-center lg:justify-center">
              <div className={`${value.imgOrder} hero-content-img`}>
                <img src={value.imgDesktop} alt='F122 home background' className="hidden lg:block" width={1200} />
                <img src={value.imgMobile} alt='F122 home background' className="lg:hidden" />

              </div>
              <Section className={`${value.articleOrder} font-f1-bold pt-12 xl:max-w-[50%]`}>
                <h1 className="text-3xl xl:text-4xl 2xl:text-5xl">{value.title}</h1>
                <p className="font-f1-regular xl:text-xl 2xl:text-2xl pt-4">{value.description}</p>
              </Section>
            </div>
          </>
        )
      })}

    </div>
  )
}

export default HeroContent;