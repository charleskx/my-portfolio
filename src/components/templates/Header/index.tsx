import { Logo } from "../../atoms/Logo";
import { Navigation } from "../../organisms/Navigation";

const urls = [
  {
    id: 1,
    title: 'Sobre',
    anchor: '#aboutUs'
  },
  {
    id: 2,
    title: 'Projetos',
    anchor: '#projects'
  },
  {
    id: 1,
    title: 'Contate',
    anchor: '#ContactUs'
  }
]

function Header() {
  return (
    <header className="flex items-center justify-between px-6 pb-10 pt-8 bg-white">
      <Logo isHeading>Charleston Amaral.</Logo>

      <Navigation navigate={urls} />
    </header>
  )
}

export { Header }