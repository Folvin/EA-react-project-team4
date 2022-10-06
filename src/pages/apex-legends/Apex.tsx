import NavigationBar from "../../components/shared/NavigationBar";
import config from "../../components/config/ApexConfig";
import LocalFooterEa from "../../components/shared/PreFooter";
import ApexHeroSection from "./apex-components/ApexHeroSection";

function ApexHomepage() {
  return (
    <div>
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
      </div>
      <LocalFooterEa />
    </div>
  );
}

export default ApexHomepage;
