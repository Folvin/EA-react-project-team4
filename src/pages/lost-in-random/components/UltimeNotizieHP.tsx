import Card from "../../../components/shared/Card";
import CardGrid from "../../../components/shared/CardGrid";

function UltimeNotizie() {
  return (
    <div className="m-7">
      <h3 className="text-white text-4xl text-center lg:text-5xl mb-7">Ultime notizie</h3>
      <div className="w-full m-auto max-w-5xl">
        {/* le 3 card */}
        <CardGrid columns="grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 justify-items-center">
          <div className="">
            <Card styleCard="bg-white">
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/06/lost-in-random-feature-image-16x9.jpg.adapt.crop16x9.431p.jpg"
                alt=""
                className=""
              />
              <div className="flex flex-col items-center my-3 mx-2">
                <div className="text-sm">Lost in Random</div>
                <div className="text-sm">14-apr-2022</div>
                <h3 className=" text-center text-xl font-bold">
                  Lost in Random entra a far parte di The Play List
                </h3>
              </div>
            </Card>
          </div>

          <div className="">
            <Card styleCard="bg-white">
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/06/lost-in-random-feature-image-16x9.jpg.adapt.crop16x9.431p.jpg"
                alt=""
              />
              <div className="flex flex-col items-center my-3 mx-2">
                <div className="text-sm">Lost in Random</div>
                <div className="text-sm">14-apr-2022</div>
                <h3 className=" text-center text-xl font-bold">
                  Lost in Random entra a far parte di The Play List
                </h3>
              </div>
            </Card>
          </div>

          <div className="">
            <Card styleCard="bg-white">
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/06/lost-in-random-feature-image-16x9.jpg.adapt.crop16x9.431p.jpg"
                alt=""
              />
              <div className="flex flex-col items-center my-3 mx-2">
                <div className="text-sm">Lost in Random</div>
                <div className="text-sm">14-apr-2022</div>
                <h3 className=" text-center text-xl font-bold">
                  Lost in Random entra a far parte di The Play List
                </h3>
              </div>
            </Card>
          </div>
        </CardGrid>
      </div>
    </div>
  );
}

export default UltimeNotizie;
