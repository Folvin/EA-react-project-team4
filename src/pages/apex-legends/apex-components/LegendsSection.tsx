import Button from "../../../components/shared/Button";
import Section from "../../../components/shared/Section";

function LegendsSection() {
  return (
    <div>
      <Section className="bg-cover bg-[url('../public/assets/pages/apex-legends/meet-the-legends-section.jpg')]">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center pb-12">
          <div className="h-full md:pt-12">
            <img className="xl:w-[535px]" src="assets/pages/apex-legends/squad.png" alt="" />
          </div>
          <div className="pt-12">
            <div className="flex flex-col items-center pt-6 gap-3 justify-center">
              <div
                className={`font-teko text-black text-4xl lg:text-5xl text-center md:w-[350px] xl:w-[550px]`}>
                LE LEGGENDE RIVOLUZIONANO I GIOCHI
              </div>

              <div
                className={`font-tt-regular flex flex-col gap-y-4 text-black text-center md:w-[350px] xl:w-[550px]`}>
                <div className={`2xl:text-xl text-base md:text-lg`}>
                  Emarginati, vagabondi e imbroglioni: gli Apex Games accolgono proprio tutti.
                  Scopri cosa può fare per la tua squadra ciascuna leggenda.
                </div>
              </div>

              <div className={`flex gap-6 flex-col w-full lg:flex-row lg:justify-around`}>
                <Button
                  url="#"
                  className={`bg-red-600 font-tt-regular min-w-[100%] border-none md:py-4 lg:px-8 text-unset text-white`}>
                  <div className="text-white font-tt-regular">INCONTRA LE LEGGENDE</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default LegendsSection;
