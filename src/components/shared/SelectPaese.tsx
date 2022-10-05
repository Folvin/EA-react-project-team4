import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";

const nations = [
  {id: 1, name: "Italia"},
  {id: 2, name: "Belgio"},
  {id: 3, name: "Bulgaria"},
  {id: 4, name: "Croazia"},
  {id: 5, name: "Cipro"},
  {id: 6, name: "Republica Ceca"},
  {id: 7, name: "Danimarca"},
  {id: 8, name: "Estonia"},
  {id: 9, name: "Finlandia"},
  {id: 10, name: "Francia"},
  {id: 11, name: "Germania"},
  {id: 12, name: "Grecia"},
  {id: 13, name: "Ungheria"},
  {id: 14, name: "Islanda"},
  {id: 15, name: "Irlanda"},
  {id: 16, name: "Austria"},
  {id: 17, name: "Lettonia"},
  {id: 18, name: "Liechtenstein"},
  {id: 19, name: "Lituania"},
  {id: 20, name: "Lussemburgo"},
  {id: 21, name: "Malta"},
  {id: 22, name: "Paesi Bassi"},
  {id: 23, name: "Norvegia"},
  {id: 24, name: "Polonia"},
  {id: 25, name: "Portogallo"},
  {id: 26, name: "Romania"},
  {id: 27, name: "Slovenia"},
  {id: 28, name: "Spagna"},
  {id: 29, name: "Svezia"},
  {id: 30, name: "Svizzera"},
];

interface Props {
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export default function SelectPaese({bgColor, borderColor, textColor}: Props) {
  const [selected, setSelected] = useState(nations[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`${bgColor} indent-2 bg-transparent rounded relative w-full cursor-default py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}>
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options
              className={`${bgColor} translate-y-1 overflow-x-hidden absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>
              {nations.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({active}) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "hover:translate-x-4 ease-in-out duration-300"
                        : `${textColor}`
                    }`
                  }
                  value={person}>
                  {({selected}) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${textColor}`}>
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
