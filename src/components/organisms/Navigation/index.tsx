import { Popover } from "@headlessui/react"
import { FiMenu, FiX } from 'react-icons/fi'
import Link from "next/link"

import { PopoverButton } from "../../atoms/PopoverButton"
import { Button } from "../../atoms/Button"
import { Theme } from "../../molecules/Theme"
import { ReactNode } from "react"

interface NavProps {
  title: string
  anchor: string
}

interface NavSocialProps {
  title: string
  icon: ReactNode
  url: string
  alt: string
}

export interface NavigationProps {
  navigate: Array<NavProps>
  social: Array<NavSocialProps>
}

function Navigation({ navigate, social }: NavigationProps) {
  return (
    <Popover className="md:hidden">
      {({ close }) => (
        <>
          <PopoverButton>
            <FiMenu className="w-6 h-6 text-newGray-700 dark:text-white" />
          </PopoverButton>

          <Popover.Panel className="absolute top-0 left-0 w-full h-full bg-white px-6 py-8 flex box-border dark:bg-newGray-800">
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-center justify-between w-full">
                <Theme />

                <PopoverButton>
                  <FiX className="w-6 h-6 text-newGray-700 dark:text-white" />
                </PopoverButton>
              </div>

              <nav className="w-full">
                <ul className="flex flex-col">
                  {
                    navigate.map((nav) => {
                      return (
                        <li key={nav.anchor} className="mb-16" onClick={() => close()}>
                          <Link href={nav.anchor}>
                            <a
                              title={nav.title}
                              className="font-bold text-xl text-newGray-500 dark:text-white hover:text-newGray-700 dark:hover:text-newGray-50 float-left w-full transition-colors"
                            >
                              {nav.title}
                            </a>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>

                <Button className="w-full">Download Resume</Button>
              </nav>

              <nav>
                <ul className="flex items-center justify-center gap-16">
                  {social.map((network) => {
                    return (
                      <li key={network.title} onClick={() => close()}>
                        <Link href={network.url}>
                          <a
                            className="w-6 h-6 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                            rel="noopener noreferrer"
                            target="_blank"
                            title={network.title}
                          >
                            {network.icon}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}

export { Navigation }