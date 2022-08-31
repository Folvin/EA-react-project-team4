import React from "react";

interface Props {
  children: React.ReactNode;
  url: string;
  className?: string;
}


const baseStyle =
  "w-full sm:w-auto text-center p-4 border-solid border-2 rounded-md";

const defaultStyle = "bg-transparent text-white border-white";



function Button({children, url, className = defaultStyle}: Props) {
  return (
    <a href={url}>
      <div className={baseStyle + className}>{children}</div>
    </a>
  );
}

export default Button;
