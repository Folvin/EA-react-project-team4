import React from "react";
import {Link} from "react-router-dom";

interface Props {
  children: React.ReactNode;
  url: string;
  buttonStyle?: string;
}

const baseStyle: string =
  "w-full sm:w-max text-center py-2 px-4 border-solid border-2 rounded transition-all hover:scale-110";

const defaultStyle: string = "bg-white text-black border-black";

function Button({children, url, buttonStyle = defaultStyle}: Props) {
  return (
    <Link to={url}>
      <div className={`${baseStyle} ${buttonStyle}`}>{children}</div>
    </Link>
  );
}

export default Button;
