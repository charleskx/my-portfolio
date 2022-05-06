import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`h-10 flex justify-center items-center font-semibold text-newGray-700 dark:text-white text-xs leading-4 px-4 py-3 border rounded-lg border-newGray-700 dark:border-white hover:text-white hover:bg-newIndigo-400 hover:border-newIndigo-400 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }