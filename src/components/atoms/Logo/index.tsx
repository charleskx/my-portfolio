import { ReactNode } from "react"

export interface LogoProps {
  children: ReactNode
  className?: string
  isHeading?: boolean
}

function Logo({ children, className, isHeading = false }: LogoProps) {
  return (
  <h1 className={`text-newGray-700 dark:text-white font-bold text-sm md:text-2xl md:leading-9 ${isHeading && 'text-base md:text-xl md:leading-8'} ${className}`}>
    {children}
  </h1>
  )
}

export { Logo }