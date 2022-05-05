import { HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className: string
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={`text-newGray-700 text-xs leading-4 ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}

export { Paragraph }