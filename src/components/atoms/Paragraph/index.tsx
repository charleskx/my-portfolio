import { HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <p className="text-newGray-700 text-xs leading-4" {...props}>
      {children}
    </p>
  )
}

export { Paragraph }