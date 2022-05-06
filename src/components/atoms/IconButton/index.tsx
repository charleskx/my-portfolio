import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <div>
      <button
        type="button"
        className="w-6 h-6 flex justify-center items-center m-0 p-0 opacity-80 hover:opacity-100 transition-opacity"
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export { IconButton }