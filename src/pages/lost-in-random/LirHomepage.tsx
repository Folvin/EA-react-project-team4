import EaPlay from "./EaPlay";
import SecondSectionHomepage from "./SecondSectionHP";
import TrailerHP from "./TrailerHP";
import "./index.css";
import FirstSectionHP from "./FirstSectionHP";

function LiRHomepage() {
  return (
    <div
      className="bg-fixed bg-[url(https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/lir-homepage-pg-bkg-xl.jpg.adapt.1920w.jpg)]"
      style={{fontFamily: "LostInRandomFont"}}>
      <EaPlay />
      <FirstSectionHP />
      <SecondSectionHomepage />
      <TrailerHP />
      <div className="w-full h-400"></div>
    </div>
  );
}

export default LiRHomepage;
