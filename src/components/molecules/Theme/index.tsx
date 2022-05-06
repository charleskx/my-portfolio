import { useTheme } from "next-themes"
import Image from "next/image";

import MoonIco from '../../../../public/assets/moon.svg'
import SunIco from '../../../../public/assets/sun.svg'

function Theme() {
  const { theme, setTheme } = useTheme();

  const isThemeDark = theme === 'dark'

  return (
    <button
      className="flex items-start justify-center gap-2 transition-all text-newGray-700 dark:text-white"
      onClick={() => setTheme(isThemeDark ? 'light' : 'dark')}
    >
      <Image
        src={isThemeDark ? SunIco : MoonIco}
        alt={isThemeDark ? 'Ícone de sol' : 'Ícone de lua'}
        className="w-6 h-6"
      />

      {isThemeDark ? 'Light Theme' : 'Dark Theme'}
    </button>
  )
}

export { Theme }