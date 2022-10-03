import NavBuyButton from "./NavBuyButton";
import {NavLinks, buyButtonConfig} from "../config/Interfaces";
import MobileSidebar from "./MobileSidebar";

interface Props {
  children: React.ReactNode;
  navColor: string;
  textColor: string;
  hoverColor: string;
  burgerColor: string;
  logo: string;
  buyButtonConfig: buyButtonConfig;
  buyButtonColor: string;
  navLinks: NavLinks[];
  mobileSidebarHeaderColor: string;
}

function NavigationBar({
  children,
  navColor,
  textColor,
  hoverColor,
  burgerColor,
  logo,
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
          buyButtonColor={buyButtonColor}
          hoverColor={hoverColor}
          navLinks={navLinks}
          mobileSidebarHeaderColor={mobileSidebarHeaderColor}
        />
        <img className="h-6 w-12 lg:ml-12" src={`${logo}`} alt="" />
        {children}
      </div>
      <div>
        <NavBuyButton
          buyButtonColor={buyButtonColor}
          buyButtonConfig={buyButtonConfig}
          textColor={textColor}
        />
      </div>
    </div>
  );
}

export default NavigationBar;
