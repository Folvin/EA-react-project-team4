import React from "react";

interface Props {
  children: React.ReactNode;
  url: string;
  buttonStyle?: string;
}


const baseStyle =
  "w-full sm:w-max text-center py-2 px-4 border-solid border-2 rounded transition-all hover:scale-110";

const defaultStyle = "bg-white text-black border-black";


function Button({children, url, buttonStyle = defaultStyle}: Props) {
  return (
    <a href={url}>
      <div className={`${baseStyle} ${buttonStyle}`}>{children}</div>
    </a>
  );
}

export default Button;
