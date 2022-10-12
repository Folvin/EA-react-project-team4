import NavigationBar from "../../components/shared/NavigationBar";
import F1Config, { F1ConfigHeroContent, F1ConfigLocalFooter, F1ConfigNewsletter } from "./F1Config";
import F1HeroBanner from "./F1HeroBanner";
import F1VideoSection from "./F1VideoSection";
import F1LocalFooterEa from "./F1LocalFooter";
import { LoadMoreContent } from "./F1Card";
import F1HeroContent from "./F1HeroContent";
import F1Newsletter from "./F1Newsletter";
import { F1ConfigContainerCard } from "./F1Config";

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
      <F1HeroBanner />
      <F1VideoSection />
      <div className="bg-f1-homepage-bg">
        <LoadMoreContent container={F1ConfigContainerCard} />
        <F1HeroContent config={F1ConfigHeroContent} />
      </div>
      <F1Newsletter
        game={F1ConfigNewsletter.game}
        bgColor={F1ConfigNewsletter.bgColor}
        textColor={F1ConfigNewsletter.textColor}
        background={F1ConfigNewsletter.background}
      />
      <F1LocalFooterEa config={F1ConfigLocalFooter} className='' />
    </div>
  );
}

export default F1;
