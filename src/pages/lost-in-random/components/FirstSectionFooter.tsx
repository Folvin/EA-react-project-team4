import Section from "../../../components/shared/Section";

function FirstSectionFooter() {
  return (
    <Section className="bg-[#252525]">
      <div className="py-5">
        {/* linea grigia che sopra i 768px va in hidden */}
        <hr className="border-gray-500 mt-4 md:hidden" />
        {/* prima parte del footer */}
        <div className="pt-6 flex flex-col lg:items-end">
          <h3 className="text-white text-sm">Partecipa alla discussione</h3>

          {/* div con 2 svg Twitter e Istagram */}
          <div className="flex gap-x-7">
            <div className="w-7 py-3 hover:scale-150 ease-in-out duration-150 hover:cursor-pointer">
              <svg
                viewBox="0 0 16 16"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                style={{display: "block", width: " 100%", height: "100%", fill: "white"}}>
                <g>
                  <path d="M15.8,2.8c-0.6,0.3-1.2,0.4-1.8,0.5c0.7-0.4,1.2-1,1.4-1.7c-0.6,0.4-1.3,0.6-2,0.8c-0.6-0.6-1.4-1-2.3-1 c-1.7,0-3.2,1.4-3.2,3.2c0,0.2,0,0.5,0.1,0.7C5.4,5.1,3,3.8,1.5,1.9C1.2,2.4,1,2.9,1,3.5c0,1.1,0.6,2.1,1.4,2.6C1.9,6.1,1.4,6,1,5.8 c0,0,0,0,0,0c0,1.5,1.1,2.8,2.5,3.1C3.3,9,3,9,2.7,9C2.5,9,2.3,9,2.1,9c0.4,1.3,1.6,2.2,3,2.2C4,12,2.6,12.5,1.2,12.5 c-0.3,0-0.5,0-0.8,0c1.4,0.9,3.1,1.4,4.8,1.4c5.8,0,9-4.8,9-9c0-0.1,0-0.3,0-0.4C14.8,4,15.4,3.5,15.8,2.8z"></path>
                </g>
              </svg>
            </div>
            <div className="w-7 py-3 hover:scale-150 ease-in-out duration-150 hover:cursor-pointer">
              <svg
                viewBox="0 0 16 16"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                style={{display: "block", width: "100%", height: "100%", fill: "white"}}>
                <g>
                  <path
                    d="M 15.926 4.997 C 15.938 4.199 15.795 3.407 15.506 2.662 C 14.998 1.422 13.913 0.511 12.603 0.224 C 11.99 0.09 11.365 0.023 10.738 0.025 C 10.691 0.02 10.644 0.011 10.598 0 L 5.337 0 C 5.215 0.011 5.095 0.029 4.979 0.031 C 4.179 0.019 3.385 0.162 2.639 0.451 C 1.398 0.958 0.486 2.043 0.199 3.352 C 0.057 3.964 -0.01 4.591 -0.001 5.219 C -0.011 6.989 -0.024 8.757 -0.011 10.525 C -0.035 11.296 0.053 12.066 0.25 12.812 C 0.675 14.391 1.996 15.567 3.614 15.807 C 4.494 15.946 5.386 16 6.277 15.969 C 7.667 15.973 9.056 15.977 10.446 15.957 C 11.228 15.981 12.009 15.895 12.766 15.702 C 14.362 15.288 15.552 13.956 15.785 12.324 C 15.882 11.81 15.884 11.277 15.93 10.752 C 15.934 10.706 15.945 10.661 15.952 10.615 L 15.952 5.357 C 15.946 5.237 15.928 5.117 15.926 4.997 Z M 14.486 10.569 C 14.498 11.149 14.44 11.729 14.313 12.296 C 14.076 13.42 13.14 14.262 11.997 14.381 C 11.323 14.472 10.643 14.517 9.963 14.514 C 8.515 14.532 7.068 14.532 5.62 14.514 C 4.96 14.535 4.3 14.474 3.655 14.334 C 2.53 14.098 1.687 13.162 1.568 12.019 C 1.477 11.345 1.433 10.664 1.437 9.984 C 1.418 8.538 1.418 7.091 1.437 5.644 C 1.416 4.984 1.477 4.324 1.617 3.68 C 1.853 2.554 2.79 1.711 3.935 1.593 C 4.609 1.502 5.289 1.457 5.969 1.46 C 7.416 1.442 8.864 1.442 10.312 1.46 C 10.972 1.439 11.632 1.5 12.277 1.64 C 13.402 1.877 14.245 2.812 14.363 3.955 C 14.448 4.624 14.493 5.298 14.497 5.973 C 14.518 6.651 14.502 9.714 14.486 10.569 Z"
                    origin="0.5 0.501"></path>
                  <path
                    d="M 7.948 3.86 C 4.836 3.863 2.895 7.288 4.454 10.024 C 6.012 12.76 9.902 12.756 11.456 10.016 C 11.808 9.395 11.994 8.69 11.995 7.973 C 11.993 5.702 10.183 3.862 7.948 3.86 Z M 7.939 10.617 C 5.932 10.606 4.687 8.392 5.699 6.629 C 6.712 4.868 9.222 4.88 10.218 6.652 C 10.445 7.055 10.562 7.511 10.561 7.974 C 10.556 9.439 9.382 10.622 7.939 10.617 Z"
                    origin="0.501 0.501"></path>
                  <path
                    d="M 12.265 2.755 C 11.552 2.75 11.1 3.548 11.452 4.191 C 11.805 4.834 12.697 4.84 13.058 4.202 C 13.14 4.057 13.184 3.891 13.185 3.723 C 13.19 3.192 12.777 2.757 12.265 2.755 Z"
                    origin="0.554 0.462"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* liena grigia fissa */}
        <hr className="border-gray-500 mt-4 " />

        {/* seconda parte di questo footer */}
        <div className="pb-5  flex flex-col lg:flex-row lg:justify-between">
          {/* immagini svg Originals e Zoik! */}
          <div className="pt-4 lg:pt-0 flex flex-col gap-y-1 md:flex-row md:gap-x-6">
            <img
              src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/eao-footer.svg"
              alt=""
              className="w-[254px] hover:cursor-pointer"
            />
            <img
              src="https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/common/zoink.svg"
              alt=""
              className="w-[150px] hover:cursor-pointer"
            />
          </div>
          {/* pegi info  12+  */}
          <div className="flex items-start gap-x-3 py-6">
            <img
              src="https://cdn.mcr.ea.com/4/images/4-6064e83c884cd462fea6818d91f8e340/1591122526-0x0-0-0.svg"
              alt=""
              className="w-[64px] hover:cursor-pointer"
            />
            <img
              src=" https://cdn.mcr.ea.com/4/images/4-386639f62a489289add35a4d3d9c20fa/1592850595-0x0-0-0.svg"
              alt=""
              className="w-[48px]"
            />
          </div>
        </div>
        <p className="max-w-[572px] text-sm text-[#A3A3A3] pb-5">
          © 2022 Thunderful Development AB. Tutti i diritti riservati. Lost in Random è un marchio
          di Thunderful Development AB.
        </p>
      </div>
    </Section>
  );
}

export default FirstSectionFooter;
