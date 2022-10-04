import NavBarEA from "../../components/core/NavBarEA";
import NavigationBar from "../../components/shared/NavigationBar";
import F1Config from "./F1Config";
import HeroBanner from "./HeroBanner";


import VideoSection from "./VideoSection";



function F1() {
  return (
    <div>
      <NavBarEA />
      <NavigationBar children={''} navColor={F1Config.navColor} textColor={F1Config.textColor} hoverColor={F1Config.hoverColor} burgerColor={F1Config.burgerColor} logo={F1Config.logo} buyButtonConfig={F1Config.buyButtonConfig} buyButtonColor={F1Config.buyButtonColor} />
      <HeroBanner />
      <VideoSection />

      

    </div>
  )
}

export default F1;


