import {Link} from "react-router-dom";
import BackgroundImg from "./BackgroundImg";
import Image from "./Image";

interface Props {
  backgroundImg: string;
  logoImg: string;
  link: string;
}

function GameCell({backgroundImg, logoImg, link}: Props) {
  return (
    <Link to={link}>
      <BackgroundImg
        classNameDiv="transition-all bg-[#00000055] hover:bg-[#000000bb] group"
        url={`giochi-in-evidenza/${backgroundImg}`}>
        <div className="w-full h-full transition-all bg-gradient-to-r from-indigo-800 to-fuchsia-600 opacity-0 group-hover:opacity-50"></div>
        <div className="absolute w-full h-full top-0 flex justify-center">
          <div className="w-1/2">
            <div className="flex flex-col h-full justify-center transition-all">
              <Image
                className="h-fit flex-1 mb-[20%] group-hover:mb-0 transition-all"
                url={`giochi-in-evidenza/${logoImg}`}
              />
              <p className="text-white text-center overflow-hidden flex-[0] opacity-0 group-hover:flex-1 group-hover:opacity-100 transition-all duration-300">
                sito ufficiale
              </p>
            </div>
          </div>
        </div>
      </BackgroundImg>
    </Link>
  );
}

export default GameCell;
