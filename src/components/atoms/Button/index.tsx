import { ButtonHTMLAttributes, ReactNode } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  loading?: boolean
}

function Button({ children, className, loading = false, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`h-10 flex justify-center items-center font-semibold text-newGray-700 dark:text-white text-xs leading-4 px-4 py-3 border rounded-lg border-newGray-700 dark:border-white hover:text-white hover:bg-newIndigo-400 hover:border-newIndigo-400 transition-colors md:h-14 md:text-base ${className}`}
      {...props}
    >
      {loading ? <AiOutlineLoading className="w-6 h-6 animate-spin" /> : children}
    </button>
  )
}

export { Button }