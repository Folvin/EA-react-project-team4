import NavigationBar from "./components/shared/NavigationBar";
import config from "../src/components/config/ApexConfig";
import LocalFooterEa from "./components/core/LocalFooterEa";

function Prove() {
  return (
    <div>
      <NavigationBar
        navColor={config.navColor}
        textColor={config.textColor}
        burgerColor={config.burgerColor}
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
      <div className="h-screen"></div>
      <LocalFooterEa />
    </div>
  );
}

export default Prove;
