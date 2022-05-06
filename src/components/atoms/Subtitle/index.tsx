import { HTMLAttributes, ReactNode } from "react"

export interface SubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

function Subtitle({ children, ...props }: SubtitleProps) {
  return (
    <h3 className="text-sm text-newGray-700 dark:text-white font-semibold md:text-xl md:leading-8" {...props}>
      {children}
    </h3>
  )
}

export { Subtitle }