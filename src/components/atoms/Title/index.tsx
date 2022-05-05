import { HTMLAttributes, ReactNode } from "react"

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

function Title({ children, ...props }: TitleProps) {
  return (
    <h2 className="text-newGray-700 text-sm" {...props}>
      {children}
    </h2>
  )
}

export { Title }