import { IconButton } from "../../atoms/IconButton";
import { Logo } from "../../atoms/Logo";

import MenuIcon from '../../../../public/assets/menu.svg'

function Header() {
  return (
    <header className="flex items-center justify-between px-6 pb-10 pt-8 bg-white">
      <Logo isHeading>Charleston Amaral.</Logo>

      <IconButton
        alt="Ícone de navegação do menu"
        src={MenuIcon}
      />
    </header>
  )
}

export { Header }