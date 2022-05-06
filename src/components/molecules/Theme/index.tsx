import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi";

function Theme() {
  const { theme, setTheme } = useTheme();

  const isThemeDark = theme === 'dark'

  return (
    <div>
      <button
        type="button"
        className="flex items-start justify-center gap-2 transition-all text-newGray-700 dark:text-white"
        onClick={() => setTheme(isThemeDark ? 'light' : 'dark')}
      >
        {isThemeDark ? <FiSun className="w-6 h-6 text-newGray-700 dark:text-white" /> : <FiMoon className="w-6 h-6 text-newGray-700 dark:text-white" />}

        {isThemeDark ? 'Light Theme' : 'Dark Theme'}
      </button>
    </div>
  )
}

export { Theme }