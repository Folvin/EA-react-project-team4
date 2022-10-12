interface Props {
  url: string;
  className?: string;
}

function Image({url, className}: Props) {
  return (
    <img
      className={`object-contain w-full h-full ${className}`}
      src={`assets/pages/homepage/${url}`}
      alt=""
    />
  );
}

export default Image;
