import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin, } from "react-icons/fi";

import { Logo } from "../../atoms/Logo";
import { Theme } from "../../molecules/Theme";
import { Navigation } from "../../organisms/Navigation";

const urls = [
  {
    id: 10,
    title: 'Sobre',
    anchor: '#aboutUs'
  },
  {
    id: 11,
    title: 'Projetos',
    anchor: '#projects'
  },
  {
    id: 12,
    title: 'Contato',
    anchor: '#contactUs'
  }
]

export const socials = [
  {
    title: 'Instagram',
    icon: <FiInstagram className="w-6 h-6 text-newGray-700 hover:text-newGray-500 dark:text-white dark:hover:text-newGray-50 transition-colors" />,
    url: 'https://www.instagram.com/charleston.amaral/',
    alt: 'Ícone da rede social Instagram'
  },
  {
    title: 'GitHub',
    icon: <FiGithub className="w-6 h-6 text-newGray-700 hover:text-newGray-500 dark:text-white dark:hover:text-newGray-50 transition-colors" />,
    url: 'https://github.com/charleskx',
    alt: 'Ícone da rede social GitHub'
  },
  {
    title: 'LinkedIn',
    icon: <FiLinkedin className="w-6 h-6 text-newGray-700 hover:text-newGray-500 dark:text-white dark:hover:text-newGray-50 transition-colors" />,
    url: 'https://www.linkedin.com/in/charleston-amaral-a0870452/',
    alt: 'Ícone da rede social LinkedIn'
  }
]

function Header() {
  return (
    <header className="flex items-center justify-between px-6 pb-10 pt-8 bg-white dark:bg-newGray-200 md:px-32 md:py-12 md:relative md:justify-center md:relative">
      <div className="md:w-full md:max-w-7xl md:relative md:flex md:items-center md:justify-between">
        <nav className="hidden md:block">
          <ul className="flex gap-12">
            {
              urls.map((network) => {
                return (
                  <li key={network.id}>
                    <Link href={network.anchor}>
                      <a className="font-medium text-base text-newGray-700 hover:text-newGray-500 dark:text-white dark:hover:text-newGray-50 transition-colors">
                        {network.title}
                      </a>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <Logo isHeading className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">Charleston Amaral.</Logo>

        <div className="hidden md:block">
          <Theme />
        </div>
      </div>

      <Navigation navigate={urls} social={socials} />
    </header>
  )
}

export { Header }