import {FaFacebookF, FaInstagram, FaTwitch, FaTwitter, FaYoutube} from "react-icons/fa";
import {Link} from "react-router-dom";
import CardGrid from "../../../components/shared/CardGrid";
import Section from "../../../components/shared/Section";

function LocalFooterApex() {
  return (
    <div className="bg-[#252525]">
      <Section className="p-6">
        <div className="flex flex-col lg:flex-row lg:border-b lg:border-[#747373]">
          <CardGrid columns="grid-cols-autosm py-4 border-b grow border-[#747373] lg:border-none">
            <Link
              className="font-tt-regular text-[#747373] text-center sm:text-left text-base hover:text-red-600 "
              to="/">
              Pagina principale
            </Link>
            <Link
              className="font-tt-regular text-[#747373] text-center sm:text-left text-base hover:text-red-600 "
              to="/">
              Informazioni
            </Link>
            <Link
              className="font-tt-regular text-[#747373] text-center sm:text-left text-base hover:text-red-600 "
              to="/">
              Leggende
            </Link>
            <Link
              className="font-tt-regular text-[#747373] text-center sm:text-left text-base hover:text-red-600 "
              to="/">
              FAQ
            </Link>
            <Link
              className="font-tt-regular text-[#747373] text-center sm:text-left text-base hover:text-red-600 "
              to="/">
              Specifiche PC
            </Link>
            <Link
              className="font-tt-regular text-[#747373] text-center sm:text-left text-base hover:text-red-600 "
              to="/">
              Notizie
            </Link>
            <Link
              className="font-tt-regular text-[#747373] text-center sm:text-left text-base hover:text-red-600 "
              to="/">
              Contenuti Multimediali
            </Link>
            <Link
              className="font-tt-regular text-[#747373] text-center sm:text-left text-base hover:text-red-600 "
              to="/">
              Forum
            </Link>
            <Link
              className="font-tt-regular text-[#747373] text-center sm:text-left text-base hover:text-red-600 "
              to="/">
              Gioca gratis ora*
            </Link>
          </CardGrid>
          <div className="py-4">
            <div className="font-teko font-semibold text-2xl text-white">
              PARTECIPA ALLA DISCUSSIONE
            </div>
            <div className="flex py-3 gap-3 border-b border-[#747373] lg:border-none">
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaTwitter
                  className="hover:scale-125 transition ease-in-out delay-100"
                  stroke="white"
                  fill="white"
                  size={20}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaInstagram
                  className="hover:scale-125 transition ease-in-out delay-100"
                  stroke="white"
                  fill="white"
                  size={20}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaTwitch
                  className="hover:scale-125 transition ease-in-out delay-100"
                  stroke="white"
                  fill="white"
                  size={20}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaFacebookF
                  className="hover:scale-125 transition ease-in-out delay-100"
                  stroke="white"
                  fill="white"
                  size={20}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="hover:scale-125 transition ease-in-out delay-100">
                <FaYoutube
                  className="hover:scale-125 transition ease-in-out delay-100"
                  stroke="white"
                  fill="white"
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full flex flex-wrap justify-start gap-6 md:gap-16 items-center">
            <img
              className="w-[84px] h-[121px]"
              src="assets/pages/apex-legends/logo-apex-a.png"
              alt="logo-apex"
            />
            <img
              className="w-[163px] h-[70px]"
              src="assets/pages/apex-legends/apex-global.svg"
              alt="apex-global-series"
            />
            <img
              className="w-[84px] h-[90px]"
              src="assets/pages/apex-legends/apex-mobile.svg"
              alt="apex-mobile"
            />
            <img
              className="w-[261px] h-[54px]"
              src="assets/pages/apex-legends/respawn-logo.png"
              alt="respawn-logo"
            />
          </div>
          <div className="flex flex-row justify-start gap-4 lg: pt-6">
            <img
              className="w-[64px] h-[78px]"
              src="assets/pages/apex-legends/pegi-16.svg"
              alt="pegi-16"
            />
            <div>
              <div className="flex gap-4">
                <img
                  className="w-[48px] h-[48px]"
                  src="assets/pages/apex-legends/pegi-violence.svg"
                  alt="pegi-violence"
                />
                <img
                  className="w-[48px] h-[48px]"
                  src="assets/pages/apex-legends/pegi-in-game.svg"
                  alt="pegi-in-game"
                />
              </div>
              <div className="h-[2px] mt-2 mb-2 bg-white"></div>
              <div className="font-tt-regular text-[#747373] text-sm">
                Acquisti in-game (contiene elementi casuali)
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default LocalFooterApex;
