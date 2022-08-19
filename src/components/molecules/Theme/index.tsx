import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';

function Theme() {
  const [isDark, setIsDark] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return (
    <div>
      <button
        type="button"
        className="flex items-start justify-center gap-2 transition-all text-newGray-700 dark:text-white"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        {isDark ? (
          <FiSun className="w-6 h-6 text-newGray-700 dark:text-white" />
        ) : (
          <FiMoon className="w-6 h-6 text-newGray-700 dark:text-white" />
        )}

        {isDark ? 'Light Theme' : 'Dark Theme'}
      </button>
    </div>
  );
}

export { Theme };
