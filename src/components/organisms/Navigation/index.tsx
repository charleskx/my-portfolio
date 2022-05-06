import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import Image from "next/image"

import MenuIcon from '../../../../public/assets/menu.svg'

interface NavProps {
  id: number
  title: string
  anchor: string
}

export interface NavigationProps {
  navigate: Array<NavProps>
}

function Navigation({ navigate }: NavigationProps) {
  return (
    <Popover>
      <Popover.Button className="w-6 h-6 flex justify-center items-center m-0 p-0 opacity-80 hover:opacity-100 transition-opacity">
        <Image
          className="w-6 h-6"
          alt="Ícone de navegação do menu"
          src={MenuIcon}
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-in-out duration-200 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Popover.Panel className="absolute z-10 top-0 left-0 w-full h-full bg-white px-6 py-8">
          <pre>{JSON.stringify(navigate, null, 2)}</pre>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export { Navigation }