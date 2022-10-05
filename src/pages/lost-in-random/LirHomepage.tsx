import EaPlay from "./EaPlay";
import SecondSectionHomepage from "./SecondSectionHP";
import TrailerHP from "./TrailerHP";
import "../../index.css";
import FirstSectionHP from "./FirstSectionHP";
import Newsletter from "../../components/shared/Newsletter";
import NavigationBar from "../../components/shared/NavigationBar";
import config from "../../components/config/LostConfig";

function LiRHomepage() {
  return (
    <div
      className="bg-fixed bg-[url(https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/lir-homepage-pg-bkg-xl.jpg.adapt.1920w.jpg)]"
      style={{fontFamily: "baskerville"}}>
      <div className="h-[100px] w-full "></div>
      <NavigationBar
        navColor={config.navColor}
        textColor={config.textColor}
        burgerColor={config.burgerColor}
        font={config.font}
        logo={config.logo}
        hoverColor={config.hoverColor}
        mobileActiveColor={config.mobileActiveColor}
        mobileBorderColor={config.mobileBorderColor}
        buyButtonConfig={config.buyButtonConfig}
        buyButtonColor={config.buyButtonColor}
        navLinks={config.navLinks}
        mobileSidebarHeaderColor={config.mobileSidebarHeaderColor}
        free={config.free}
      />
      <EaPlay />
      <FirstSectionHP />
      <SecondSectionHomepage />
      <TrailerHP />
      <div className="w-full h-400"></div>
      <div className=" bg-cover bg-[url(https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/lir-email-sub-xl.jpg.adapt.1920w.jpg)]">
        <div className="max-w-7xl m-auto">
          <Newsletter
            game="Lost in Random™"
            buttonColor="bg-[#4D4A8A]"
            bgCheck="bg-white"
            borderColor="border-white"
            bgColor="bg-gray-800"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default LiRHomepage;
