import {Popover} from "@headlessui/react";
import {FaChevronDown} from "react-icons/fa";
import {Link} from "react-router-dom";
import Button from "./Button";

interface Props {
  buyButtonConfig: buyButtonConfig;
  buyButtonColor: string;
  textColor: string;
}
interface buyButtonConfig {
  eaApp?: string;
  origin?: string;
  steam?: string;
  ps4?: string;
  ps5?: string;
  xbox?: string;
  switch?: string;
}

function NavBuyButton({buyButtonConfig, buyButtonColor, textColor}: Props) {
  return (
    <Popover className="z-10 relative">
      <Popover.Button
        className={`flex justify-center w-40 lg:w-48 h-10 cursor-pointer text-sm lg:text-base text-center items-center mr-2 rounded transition-all ${buyButtonColor} ${textColor}`}>
        SCARICA GRATIS* <FaChevronDown className="mt-1 ml-1" />
      </Popover.Button>

      <Popover.Panel className="absolute w-56 bg-black -left-7 mt-3 z-20 transition-all">
        <div className="flex flex-col z-10 justify-center items-center">
          {buyButtonConfig.eaApp ? (
            <Button url={buyButtonConfig.eaApp}>
              <div>App EA per Windows</div>
            </Button>
          ) : (
            <></>
          )}
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
}

export default NavBuyButton;
