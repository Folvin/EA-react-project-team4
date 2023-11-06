import {ReactNode} from "react";
import Image from "./Image";

interface Props {
  children: ReactNode;
  url: string;
  classNameImg?: string;
  classNameDiv?: string;
}

function BackgroundImg({children, url, classNameImg, classNameDiv}: Props) {
  return (
    <div className="relative">
      <div>
        <Image className={classNameImg} url={url} />
      </div>
      <div className={`absolute top-0 w-full h-full ${classNameDiv}`}>{children}</div>
    </div>
  );
}

export default BackgroundImg;
