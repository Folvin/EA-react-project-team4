import NavBuyButton from "./NavBuyButton";

interface Props {
  children: React.ReactNode;
  navColor: string;
  textColor: string;
  hoverColor: string;
  burgerColor: string;
  logo: string;
  buyButtonConfig: {};
  buyButtonColor: string;
}

function NavigationBar({
  children,
  navColor,
  textColor,
  hoverColor,
  burgerColor,
  logo,
  buyButtonConfig,
  buyButtonColor,
}: Props) {
  return (
    <div
      className={`h-14 w-full flex justify-between sticky top-10 z-10 gap-x-8 items-center ${navColor}`}>
      <div className="flex gap-3 items-center">
        <button className="block lg:hidden ml-1" title="burgerMenu">
          <svg
            height="38px"
            version="1.1"
            viewBox="0 0 512 512"
            width="38px"
            stroke={`${burgerColor}`}
            fill={`${burgerColor}`}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
              <g>
                <path d="M424,394H89c-4.418,0-8-3.582-8-8s3.582-8,8-8h335c4.418,0,8,3.582,8,8S428.418,394,424,394z" />
              </g>
              <g>
                <path d="M424,265H89c-4.418,0-8-3.582-8-8c0-4.418,3.582-8,8-8h335c4.418,0,8,3.582,8,8C432,261.418,428.418,265,424,265z" />
              </g>
              <g>
                <path d="M424,135H89c-4.418,0-8-3.582-8-8s3.582-8,8-8h335c4.418,0,8,3.582,8,8S428.418,135,424,135z" />
              </g>
            </g>
          </svg>
        </button>
        <img className="h-6 w-12 lg:ml-12" src={`${logo}`} alt="" />
        {children}
      </div>
      <div>
        <NavBuyButton
          buyButtonColor={buyButtonColor}
          buyButtonConfig={buyButtonConfig}
          textColor={textColor}
        />
      </div>
    </div>
  );
}

export default NavigationBar;
