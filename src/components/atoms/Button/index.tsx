import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  fullWidth?: boolean
}

function Button({ children, fullWidth, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`h-10 flex justify-center items-center font-semibold text-newGray-700 text-xs leading-4 px-4 py-3 border rounded-lg border-newGray-700 hover:text-white hover:bg-newIndigo-400 hover:border-newIndigo-400 transition-colors ${fullWidth && 'w-full'}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }