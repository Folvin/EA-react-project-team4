import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'


const nations = [
	{ id: 1, name: 'Austria' },
	{ id: 2, name: 'Belgio' },
	{ id: 3, name: 'Bulgaria' },
	{ id: 4, name: 'Croazia' },
	{ id: 5, name: 'Cipro' },
	{ id: 6, name: 'Republica Ceca' },
	{ id: 7, name: 'Danimarca' },
	{ id: 8, name: 'Estonia' },
	{ id: 9, name: 'Finlandia' },
	{ id: 10, name: 'Francia' },
	{ id: 11, name: 'Germania' },
	{ id: 12, name: 'Grecia' },
	{ id: 13, name: 'Ungheria' },
	{ id: 14, name: 'Islanda' },
	{ id: 15, name: 'Irlanda' },
	{ id: 16, name: 'Italia' },
	{ id: 17, name: 'Lettonia' },
	{ id: 18, name: 'Liechtenstein' },
	{ id: 19, name: 'Lituania' },
	{ id: 20, name: 'Lussemburgo' },
	{ id: 21, name: 'Malta' },
	{ id: 22, name: 'Paesi Bassi' },
	{ id: 23, name: 'Norvegia' },
	{ id: 24, name: 'Polonia' },
	{ id: 25, name: 'Portogallo' },
	{ id: 26, name: 'Romania' },
	{ id: 27, name: 'Slovenia' },
	{ id: 28, name: 'Spagna' },
	{ id: 29, name: 'Svezia' },
	{ id: 30, name: 'Svizzera' }
]

function MyListbox() {
	const [selected, setSelected] = useState(nations[0])

	return (
		<div className=" w-full h-full">
			<Listbox value={selected} onChange={setSelected}>
				<div className="relative">
					<Listbox.Button className="px-4 py-2 relative w-full h-full cursor-default text-left">
						<Listbox.Label>Prezzi Regionali</Listbox.Label>
						<span className="block truncate">{selected.name}</span>
						<span className=" absolute inset-y-6 right-0 pr-2">
							<img src="assets/global/caret-down.png" alt="" />
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="z-10 absolute mt-4 max-h-80 w-full overflow-auto bg-gray-100 py-2 text-base shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none sm:text-sm">
							{nations.map((nation, nationIdx) => (
								<Listbox.Option
									key={nationIdx}
									className={({ active }) =>
										`relative cursor-default select-none py-1 pl-4  pr-4 ${active ? 'bg-blue-700 text-white' : 'text-gray-900'
										}`
									}
									value={nation}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${selected ? 'font-medium' : 'font-normal'
													}`}
											>
												{nation.name}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
	)
}


export default MyListbox