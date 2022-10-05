import {Popover, Transition} from "@headlessui/react";
import {FaChevronDown} from "react-icons/fa";
import Button from "./Button";
import {SiOrigin} from "react-icons/si";
import {SiSteam} from "react-icons/si";
import {SiPlaystation} from "react-icons/si";
import {SiXbox} from "react-icons/si";
import {SiNintendoswitch} from "react-icons/si";
import {SiEpicgames} from "react-icons/si";

interface Props {
  buyButtonConfig: buyButtonConfig;
  buyButtonColor: string;
  textColor: string;
  free: boolean;
}
interface buyButtonConfig {
  eaApp?: string;
  origin?: string;
  steam?: string;
  ps4?: string;
  ps5?: string;
  xbox?: string;
  switch?: string;
  egs?: string;
}

function NavBuyButton({buyButtonConfig, buyButtonColor, textColor, free}: Props) {
  return (
    <Popover className="font-tt-regular z-10 relative transition-all">
      <Popover.Button
        className={`flex justify-center w-40 lg:w-48 h-10 cursor-pointer text-sm lg:text-base text-center items-center mr-2 rounded ${buyButtonColor} ${textColor}`}>
        {free ? "SCARICA GRATIS*" : "ACQUISTA ORA"} <FaChevronDown className="mt-1 ml-1" />
      </Popover.Button>

      <Transition
        enter="origin-top ease-in-out duration-300"
        enterFrom="scale-y-0 opacity-0"
        enterTo="scale-y-100 opacity-100"
        leave="origin-top ease-in-out duration-300"
        leaveFrom="scale-y-100 opacity-100"
        leaveTo="scale-y-0 opacity-0">
        <Popover.Panel className="absolute w-60 bg-black bg-opacity-80 -left-[4.8rem] lg:-left-12 mt-3 z-20 transition-all">
          <div className="flex flex-col z-10 items-stretch gap-4 p-3">
            {buyButtonConfig.eaApp ? (
              <Button
                className="h-12 bg-gradient-to-r from-indigo-800 to-fuchsia-800 border-none sm:w-full"
                url={buyButtonConfig.eaApp}>
                <div className="text-base text-white front flex gap-2 items-center justify-between">
                  App EA per Windows
                  <img className=" w-5 block" alt="ea-logo" src="assets/core/ea-logo-button.png" />
                </div>
              </Button>
            ) : (
              <></>
            )}

            {buyButtonConfig.origin ? (
              <Button
                className="h-12 sm:w-full bg-[#F56C2D] border-none"
                url={buyButtonConfig.origin}>
                <div className="text-base text-white front flex gap-2 items-center justify-between">
                  Origin
                  <SiOrigin className="mt-1" />
                </div>
              </Button>
            ) : (
              <></>
            )}

            {buyButtonConfig.steam ? (
              <Button className="h-12 sm:w-full bg-transparent" url={buyButtonConfig.steam}>
                <div className="text-base text-white front flex gap-2 items-center justify-between">
                  Steam
                  <SiSteam className="mt-1" />
                </div>
              </Button>
            ) : (
              <></>
            )}

            {buyButtonConfig.ps4 ? (
              <Button className="h-12 sm:w-full bg-[#003087] border-none" url={buyButtonConfig.ps4}>
                <div className="text-base text-white front flex gap-2 items-center justify-between">
                  PlayStation® 4
                  <SiPlaystation className="mt-1" />
                </div>
              </Button>
            ) : (
              <></>
            )}

            {buyButtonConfig.ps5 ? (
              <Button className="h-12 sm:w-full bg-[#003087] border-none" url={buyButtonConfig.ps5}>
                <div className="text-base text-white front flex gap-2 items-center justify-between">
                  PlayStation® 5
                  <SiPlaystation className="mt-1" />
                </div>
              </Button>
            ) : (
              <></>
            )}

            {buyButtonConfig.xbox ? (
              <Button
                className="h-12 sm:w-full bg-[#52b043] border-none"
                url={buyButtonConfig.xbox}>
                <div className="text-base text-white front flex gap-2 items-center justify-between">
                  Xbox
                  <SiXbox className="mt-1" />
                </div>
              </Button>
            ) : (
              <></>
            )}

            {buyButtonConfig.switch ? (
              <Button
                className="h-12 sm:w-full bg-[#E61400] border-none"
                url={buyButtonConfig.switch}>
                <div className="text-base text-white front flex gap-2 items-center justify-between">
                  Nintendo Switch™
                  <SiNintendoswitch className="mt-1" />
                </div>
              </Button>
            ) : (
              <></>
            )}

            {buyButtonConfig.egs ? (
              <Button className="h-12 sm:w-full bg-slate-600 border-none" url={buyButtonConfig.egs}>
                <div className="text-base text-white border-black front flex gap-2 items-center justify-between">
                  Epic Game Store
                  <SiEpicgames className="mt-1" />
                </div>
              </Button>
            ) : (
              <></>
            )}
          </div>

          <img src="/solutions.jpg" alt="" />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default NavBuyButton;
