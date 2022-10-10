import NavigationBar from "../../components/shared/NavigationBar";
import config from "../../components/config/ApexConfig";
import ApexHeroSection from "./apex-components/ApexHeroSection";
import InstinctSection from "./apex-components/InstinctSection";
import ApexCards from "./apex-components/ApexCards";
import VantageSection from "./apex-components/VantageSection";
import BattleRoyaleSection from "./apex-components/BattleRoyaleSection";
import LegendsSection from "./apex-components/LegendsSection";
import Newsletter from "../../components/shared/Newsletter";
import PlayFreeSection from "./apex-components/PlayFreeSection";
import LocalFooterApex from "./apex-components/LocalFooterApex";

function ApexHomepage() {
  return (
    <div className="font-teko">
      <NavigationBar
        navColor={config.navColor}
        textColor={config.textColor}
        burgerColor={config.burgerColor}
        font={config.font}
        logo={config.logo}
        mainPage={config.mainPage}
        hoverColor={config.hoverColor}
        mobileActiveColor={config.mobileActiveColor}
        mobileBorderColor={config.mobileBorderColor}
        buyButtonConfig={config.buyButtonConfig}
        buyButtonColor={config.buyButtonColor}
        navLinks={config.navLinks}
        mobileSidebarHeaderColor={config.mobileSidebarHeaderColor}
        free={config.free}
      />
      <div>
        <ApexHeroSection />
        <InstinctSection />
        <ApexCards />
        <VantageSection />
        <BattleRoyaleSection />
        <LegendsSection />
        <div className="bg-[#E5E1D8]">
          <Newsletter
            game="Apex Legends"
            textColor="text-black"
            bgColor="bg-[#E5E1D8]"
            borderColor="border-black"
            bgCheck="bg-[#E5E1D8]"
            buttonColor="bg-red-600"
          />
        </div>
      </div>
      <PlayFreeSection />
      <LocalFooterApex />
    </div>
  );
}

export default ApexHomepage;
