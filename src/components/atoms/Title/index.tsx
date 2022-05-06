import { HTMLAttributes, ReactNode } from "react"

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

function Title({ children, ...props }: TitleProps) {
  return (
    <h2 className="text-newGray-700 dark:text-white text-sm md:text-3xl md:leading-10 md:font-bold" {...props}>
      {children}
    </h2>
  )
}

export { Title }