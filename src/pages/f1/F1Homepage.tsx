import LocalFooterEa from "../../components/core/LocalFooterEa";
import NavigationBar from "../../components/shared/NavigationBar";
import F1Config from "./F1Config";
import HeroBanner from "./HeroBanner";

import VideoSection from "./VideoSection";

function F1() {
  return (
    <div className="tracking-tighter">
      <div className="lg:tracking-[-0.12em] xl:tracking-normal">
        <NavigationBar
          navColor={F1Config.navColor}
          textColor={F1Config.textColor}
          burgerColor={F1Config.burgerColor}
          font={F1Config.font}
          logo={F1Config.logo}
          mainPage={F1Config.mainPage}
          hoverColor={F1Config.hoverColor}
          mobileActiveColor={F1Config.mobileActiveColor}
          mobileBorderColor={F1Config.mobileBorderColor}
          buyButtonConfig={F1Config.buyButtonConfig}
          buyButtonColor={F1Config.buyButtonColor}
          navLinks={F1Config.navLinks}
          mobileSidebarHeaderColor={F1Config.mobileSidebarHeaderColor}
          free={F1Config.free}
        />
      </div>
      <HeroBanner />
      <VideoSection />
      <LocalFooterEa />
    </div>
  );
}

export default F1;
