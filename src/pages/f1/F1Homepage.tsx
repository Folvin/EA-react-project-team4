import NavigationBar from "../../components/shared/NavigationBar";
import F1Config, { F1ConfigHeroContent, F1ConfigLocalFooter } from "./F1Config";
import HeroBanner from "./HeroBanner";
import VideoSection from "./VideoSection";
import F1LocalFooterEa from "./F1LocalFooter";
import { containerCard, LoadMoreContent } from "./Card";
import HeroContent from "./HeroContent";
import F1Footer from "./F1Footer";

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
      <LoadMoreContent container={containerCard} />
      <HeroContent config={F1ConfigHeroContent} />
    
      <F1LocalFooterEa config={F1ConfigLocalFooter} className=''  />
      <F1Footer className="" />
      
    </div>
  );
}

export default F1;
