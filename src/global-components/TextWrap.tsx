import React from "react";

interface Props {
  children: React.ReactNode;
  style?: string
}

function TextWrap({children, style}: Props) {
  return <div className={`flex flex-wrap w-full gap-x-4 ${style}`}>{children}</div>;
}

export default TextWrap;
