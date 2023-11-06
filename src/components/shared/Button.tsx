import React from "react";
import {Link} from "react-router-dom";

interface Props {
  children: React.ReactNode;
  url: string;
  className?: string;
}

const baseStyle: string = `
block w-full sm:w-max text-center py-2 px-4 border-solid border-2 rounded transition-all hover:scale-105
bg-white text-black border-white flex justify-center`;

function Button({children, url, className}: Props) {
  return (
    <div>
      <Link className={`${baseStyle} ${className}`} to={url}>
        {children}
      </Link>
    </div>
  );
}

export default Button;
