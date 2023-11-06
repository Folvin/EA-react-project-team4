import Button from "../../../components/shared/Button";
import Card from "../../../components/shared/Card";
import CardGrid from "../../../components/shared/CardGrid";
import Section from "../../../components/shared/Section";

function UltimeNotizie() {
  return (
    <Section>
      <div className=" max-w-7xl m-auto ">
        <h3 className="text-white text-4xl text-center lg:text-5xl mt-7 mb-7">Ultime notizie</h3>
        <div className="w-full m-auto max-w-5xl ">
          {/* le 3 card */}
          <CardGrid columns="auto-rows-fr grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-4 lg:grid-rows-1 lg:grid-cols-3 justify-items-center">
            <div className="w-full md:col-start-1 md:col-end-3 lg:col-auto">
              <Card styleCard="bg-white">
                <img
                  src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/06/lost-in-random-feature-image-16x9.jpg.adapt.crop16x9.431p.jpg"
                  alt=""
                  className="hidden md:block"
                />
                <div className="flex flex-col m-6">
                  <div className="w-full flex flex-col items-center md:flex-row md:gap-x-4">
                    <div className="text-sm text-[#716ccc]">Lost in Random</div>
                    <div className="text-sm">14-apr-2022</div>
                  </div>
                  <h3 className=" lg:text-2xl  text-center md:text-left text-xl font-bold">
                    Lost in Random entra a far parte di The Play List
                  </h3>
                </div>
              </Card>
            </div>

            <div className="w-full md:col-start-3 md:col-end-5 lg:col-auto">
              <Card styleCard="bg-white h-full">
                <img
                  src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/10/lir-artwork-image-16x9-1.jpg.adapt.crop16x9.431p.jpg"
                  alt=""
                  className="hidden md:block"
                />
                <div className="flex flex-col m-6">
                  <div className="w-full flex flex-col items-center md:flex-row md:gap-x-4">
                    <div className="text-sm text-[#716ccc]">Lost in Random</div>
                    <div className="text-sm">13-ott-2021</div>
                  </div>
                  <h3 className=" lg:text-2xl text-center md:text-left text-xl font-bold">
                    L'arte di Alea
                  </h3>
                </div>
              </Card>
            </div>

            <div className="w-full md:col-start-2 md:col-end-4 lg:col-auto">
              <Card styleCard="bg-white h-full">
                <img
                  src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-1920x1080-neeshka-no-logo.jpg.adapt.crop16x9.431p.jpg"
                  alt=""
                  className="hidden md:block"
                />
                <div className="flex flex-col m-6">
                  <div className="w-full flex flex-col items-center md:flex-row md:gap-x-4">
                    <div className="text-sm text-[#716ccc]">Lost in Random</div>
                    <div className="text-sm">27-set-2021</div>
                  </div>
                  <h3 className=" lg:text-2xl  md:text-left text-center text-xl font-bold">
                    LA MUSICA DI ALEA
                  </h3>
                </div>
              </Card>
            </div>
          </CardGrid>
        </div>

        <Button url="#" className="mt-10 m-auto">
          <div className="mx-3 my-1 lg:text-lg text-[#161616]">Altre Notizie</div>
        </Button>
      </div>
    </Section>
  );
}

export default UltimeNotizie;
