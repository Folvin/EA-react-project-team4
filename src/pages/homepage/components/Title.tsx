import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

function Title({children}: Props) {
  return <h1 className="text-4xl 2xl:text-5xl font-roboto-bold text-center py-4">{children}</h1>;
}

export default Title;
