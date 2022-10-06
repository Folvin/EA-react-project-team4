import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";

interface Props {
  name: string;
  id: number;
  img?: string;
}

function SelectBoxData({title, arr}: {title: string; arr: Array<Props>}) {
  const [selected, setSelected] = useState(arr[0]);

  return (
    <div className="w-full h-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="px-4 py-2 relative w-full h-full cursor-default text-left">
            <Listbox.Label>{title}</Listbox.Label>
            <span className="block truncate">
              <span className="flex items-center gap-x-2">
                {selected.name}
                {selected.img ? (
                  <img
                    src={selected.img}
                    alt={selected.name}
                    className="w-[16px] h-[12px]"
                  />
                ) : null}
              </span>
            </span>
            <span className="absolute inset-y-6 right-0 pr-2">
              <img src="assets/global/caret-down.png" alt="" />
            </span>
          </Listbox.Button>

            <Listbox.Options
              className="absolute bottom-[100%] mb-4 max-h-80 w-full overflow-auto bg-gray-100 py-2 text-base shadow-lg
              sm:text-sm lg:grid lg:grid-cols-4 lg:min-w-max lg:max-h-min lg:gap-6 lg:right-0 lg:px-2 lg:py-4 ">
              {arr.map((nation, nationIdx) => (
                <Listbox.Option
                  key={nationIdx}
                  value={nation}
                  className={({
                    active,
                  }) => `relative cursor-default select-none py-1 pl-1
                  ${
                    active
                      ? "bg-blue-700 text-white lg:bg-transparent lg:text-inherit lg:translate-x-2 lg:trnasition lg:ease-in lg:duration-100"
                      : "text-gray-900"
                  }`}>
                  {({selected}) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        <span className="flex items-center gap-1">
                          <img src={nation.img} alt="" className="w-[16px]" />
                          {nation.name}
                        </span>
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

export default SelectBoxData;
