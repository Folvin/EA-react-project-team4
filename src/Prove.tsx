import NavigationBar from "./components/shared/NavigationBar";
import config from "../src/components/config/ApexConfig";
import {Link} from "react-router-dom";

function Prove() {
  return (
    <div>
      <NavigationBar
        navColor={config.navColor}
        textColor={config.textColor}
        hoverColor={config.hoverColor}
        burgerColor={config.burgerColor}
        logo={config.logo}
        buyButtonConfig={config.buyButtonConfig}
        buyButtonColor={config.buyButtonColor}
        navLinks={config.navLinks}
        mobileSidebarHeaderColor={config.mobileSidebarHeaderColor}>
        <Link to="/bruh">BRUH</Link>
      </NavigationBar>
    </div>
  );
}

export default Prove;
