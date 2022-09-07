import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string
}

function TextWrap({children, className}: Props) {
  return <div className={`flex flex-wrap w-full gap-x-8 gap-y-2 ${className}`}>{children}</div>;
}

export default TextWrap;
