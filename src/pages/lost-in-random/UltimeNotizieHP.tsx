import Card from "../../components/shared/Card";
import CardGrid from "../../components/shared/CardGrid";

function UltimeNotizie() {
  return (
    <div className="m-7">
      <h3 className="text-white text-4xl text-center lg:text-5xl">Ultime notizie</h3>
      <div>
        {/* le 3 card */}
        <CardGrid columns="">
          <div className="w-56">
            <Card styleCard="">
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/06/lost-in-random-feature-image-16x9.jpg.adapt.crop16x9.431p.jpg"
                alt=""
              />
            </Card>
          </div>
          <div className="w-56">
            <Card styleCard="">
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/06/lost-in-random-feature-image-16x9.jpg.adapt.crop16x9.431p.jpg"
                alt=""
              />
            </Card>
          </div>
          <div className="w-56">
            <Card styleCard="">
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/06/lost-in-random-feature-image-16x9.jpg.adapt.crop16x9.431p.jpg"
                alt=""
              />
            </Card>
          </div>
        </CardGrid>
      </div>
    </div>
  );
}

export default UltimeNotizie;
