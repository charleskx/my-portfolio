import { Popover } from "@headlessui/react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import { PopoverButton } from "../../atoms/PopoverButton"
import { Button } from "../../atoms/Button"

import MenuIcon from '../../../../public/assets/menu.svg'
import XIcon from '../../../../public/assets/x.svg'

interface NavProps {
  title: string
  anchor: string
}

interface NavSocialProps {
  title: string
  icon: StaticImageData
  url: string
  alt: string
}

export interface NavigationProps {
  navigate: Array<NavProps>
  social: Array<NavSocialProps>
}

function Navigation({ navigate, social }: NavigationProps) {
  return (
    <Popover>
      {({ close }) => (
        <>
          <PopoverButton
            alt="Ícone de navegação do menu"
            src={MenuIcon}
          />

          <Popover.Panel className="absolute top-0 left-0 w-full h-full bg-white px-6 py-8 flex box-border">
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-center justify-between w-full">
                <button type="button">Alterar tema</button>

                <PopoverButton
                  alt="Ícone X para fechamento do menu"
                  src={XIcon}
                />
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
                              className="font-bold text-xl text-newGray-500 hover:text-newGray-700 transition-colors float-left w-full"
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
                            <Image
                              src={network.icon}
                              alt={network.alt}
                            />
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