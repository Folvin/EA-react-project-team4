import { Link } from "react-router-dom";
import CardGrid from "./CardGrid";
import EaNavButton from "./EaNavButton";

interface HelpNav {
    pos: string,
    handleToggle: (event: React.MouseEvent<HTMLImageElement>) => any;
}

function NavHelp({ pos, handleToggle }: HelpNav) {
    return (
        <div className={`h-400 w-full transition-all flex flex-col justify-end fixed ${pos} z-40 items-center bg-eaBlack-100`}>
            <div className="h-10 w-full flex justify-end gap-x-8 items-center">
                <div onClick={handleToggle} className="w-fit cursor-pointer">
                    <img className="w-7 h-7 mr-9 mt-9" src="assets/global/CrossNavIcon.png" alt="" />
                </div>
            </div>
            <div className="h-10 w-full flex -z-10 justify-center items-center">
                <div className="font-bold text-lg text-white">
                    Ti serve aiuto?
                </div>
            </div>
            <div className="flex h-3/4 w-full md:w-auto justify-start px-[12%] md:justify-center items-center">
                <CardGrid columns="grid-cols-1 md:grid-cols-2">
                    <EaNavButton handleToggle={handleToggle} icon="assets/global/VerifyOriginNavIcon.png" url="/verifyorigin" text="Verifica dati di accesso a Origin" />
                    <EaNavButton handleToggle={handleToggle} icon="assets/global/LinkOriginNavIcon.png" url="/linkorigin" text="Collega Origin al mio ID PSN" />
                    <EaNavButton handleToggle={handleToggle} icon="assets/global/RedeemNavIcon.png" url="/redeemcode" text="Come riscattare un codice" />
                    <EaNavButton handleToggle={handleToggle} icon="assets/global/TroubleshootingNavIcon.png" url="/troubleshooting" text="Non riesco a giocare online" />
                </CardGrid>
            </div>
            <div className="h-10 w-full flex justify-center text-center items-center px-[12%] pb-8">
                <div className="text-base text-white">
                    Non hai trovato ciò che cerchi? Vai su <span onClick={handleToggle} className="text-red-500 cursor-pointer"><Link to="/eahelp">Aiuto EA</Link></span>, <span onClick={handleToggle} className="text-red-500 cursor-pointer"><Link to="/answershq">Answers HQ</Link></span> o sul <span onClick={handleToggle} className="text-red-500 cursor-pointer"><Link to="/eaforums">Forum EA</Link></span>.
                </div>
            </div>
        </div>
    );
}

export default NavHelp;
