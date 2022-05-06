import { FiGithub, FiInstagram, FiLinkedin, } from "react-icons/fi";

import { Logo } from "../../atoms/Logo";
import { Navigation } from "../../organisms/Navigation";

const urls = [
  {
    title: 'Sobre',
    anchor: '#aboutUs'
  },
  {
    title: 'Projetos',
    anchor: '#projects'
  },
  {
    title: 'Contate',
    anchor: '#contactUs'
  }
]

const socials = [
  {
    title: 'Instagram',
    icon: <FiInstagram className="w-6 h-6 text-newGray-700 dark:text-white" />,
    url: 'https://www.instagram.com/charleston.amaral/',
    alt: 'Ícone da rede social Instagram'
  },
  {
    title: 'GitHub',
    icon: <FiGithub className="w-6 h-6 text-newGray-700 dark:text-white" />,
    url: 'https://github.com/charleskx',
    alt: 'Ícone da rede social GitHub'
  },
  {
    title: 'LinkedIn',
    icon: <FiLinkedin className="w-6 h-6 text-newGray-700 dark:text-white" />,
    url: 'https://www.linkedin.com/in/charleston-amaral-a0870452/',
    alt: 'Ícone da rede social LinkedIn'
  }
]

function Header() {
  return (
    <header className="flex items-center justify-between px-6 pb-10 pt-8 bg-white dark:bg-newGray-200">
      <Logo isHeading>Charleston Amaral.</Logo>

      <Navigation navigate={urls} social={socials} />
    </header>
  )
}

export { Header }