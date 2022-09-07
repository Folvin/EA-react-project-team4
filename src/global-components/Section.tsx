import React from "react";

interface Props {
  children: React.ReactNode;
  style?: string;
}

function Section({children, style}: Props) {
  return <section className={`px-[8%] ${style}`}>{children}</section>;
}

export default Section;
