import React from "react";

interface Props {
  children: React.ReactNode;
}

function Section({children}: Props) {
  return <section className="px-[8%]">{children}</section>;
}

export default Section;
