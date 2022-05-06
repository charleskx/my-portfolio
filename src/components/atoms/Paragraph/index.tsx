import { HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className?: string
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={`text-newGray-700 dark:text-white text-xs leading-4 md:text-lg ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}

export { Paragraph }