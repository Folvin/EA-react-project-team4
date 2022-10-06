import {FunctionComponent} from "react";

interface ImageProps {
  className?: string;
  file: string;
  title?: string;
}

const Image: FunctionComponent<ImageProps> = ({className, file, title}) => {
  return (
    <div className="flex flex-col">
      <p></p>
      <img
        className={`${className} grow-0`}
        src={`assets/pages/presentation/${file}`}
        alt="failed to load img"
      />
    </div>
  );
};

export default Image;
