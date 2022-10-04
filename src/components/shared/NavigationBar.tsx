import NavBuyButton from "./NavBuyButton";
import {NavLinks, buyButtonConfig} from "../config/Interfaces";
import MobileSidebar from "./MobileSidebar";
import DesktopNavContainer from "./DesktopNavContainer";

interface Props {
  navColor: string;
  textColor: string;
  mobileActiveColor: string;
  mobileBorderColor: string;
  hoverColor: string;
  burgerColor: string;
  logo: string;
  free: boolean;
  buyButtonConfig: buyButtonConfig;
  buyButtonColor: string;
  navLinks: NavLinks[];
  mobileSidebarHeaderColor: string;
}

function NavigationBar({
  navColor,
  textColor,
  mobileBorderColor,
  mobileActiveColor,
  burgerColor,
  hoverColor,
  logo,
  free,
  buyButtonConfig,
  buyButtonColor,
  navLinks,
  mobileSidebarHeaderColor,
}: Props) {
  return (
    <div
      className={`h-14 w-full flex justify-between sticky top-10 z-10 gap-x-8 items-center ${navColor}`}>
      <div className="flex gap-3 items-center">
        {/* Mobile sidebar */}
        <MobileSidebar
          burgerColor={burgerColor}
          navColor={navColor}
          textColor={textColor}
          logo={logo}
          mobileBorderColor={mobileBorderColor}
          buyButtonColor={buyButtonColor}
          mobileActiveColor={mobileActiveColor}
          navLinks={navLinks}
          mobileSidebarHeaderColor={mobileSidebarHeaderColor}
        />
        <img className="h-6 w-12 mr-8 lg:ml-12" src={`${logo}`} alt="" />
        <DesktopNavContainer
          navColor={navColor}
          textColor={textColor}
          hoverColor={hoverColor}
          burgerColor={burgerColor}
          logo={logo}
          buyButtonColor={buyButtonColor}
          navLinks={navLinks}
        />
      </div>
      <div>
        <NavBuyButton
          buyButtonColor={buyButtonColor}
          buyButtonConfig={buyButtonConfig}
          textColor={textColor}
          free={free}
        />
      </div>
    </div>
  );
}

export default NavigationBar;
