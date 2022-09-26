import NavigationBar from "./components/shared/NavigationBar";
import ApexConfig from "./components/config/ApexConfig";
import {Link} from "react-router-dom";

function Prove() {
  const config = ApexConfig;

  return (
    <div>
      <NavigationBar
        navColor={config.navColor}
        textColor={config.textColor}
        hoverColor={config.hoverColor}
        burgerColor={config.burgerColor}
        logo={config.logo}
        buyButtonConfig={config.buyButtonConfig}
        buyButtonColor={config.buyButtonColor}>
        <Link to="/bruh">BRUH</Link>
      </NavigationBar>
    </div>
  );
}

export default Prove;
