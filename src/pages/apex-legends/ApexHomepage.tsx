import NavigationBar from "../../components/shared/NavigationBar";
import config from "../../components/config/ApexConfig";
import FooterEa from "../../components/core/FooterEa";
import LocalFooterEa from "../../components/core/LocalFooterEa";

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
      <div className="bg-red-400 h-screen"></div>
      <LocalFooterEa />
    </div>
  );
}

export default ApexHomepage;
