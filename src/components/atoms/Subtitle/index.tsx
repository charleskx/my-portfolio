import { HTMLAttributes, ReactNode } from "react"

export interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

function Subtitle({ children, ...props }: SubtitleProps) {
  return (
    <h3 className="text-sm text-newGray-700 font-semibold" {...props}>
      {children}
    </h3>
  )
}

export { Subtitle }