import {ReactNode} from "react";

function Title({children}: {children: ReactNode}) {
  return <h1 className="text-[24px]">{children}</h1>;
}

export default Title;
