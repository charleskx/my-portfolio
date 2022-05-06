import { ReactNode } from "react"

export interface LogoProps {
  children: ReactNode
  className?: string
  isHeading?: boolean
}

function Logo({ children, className, isHeading = false }: LogoProps) {
  return (
  <h1 className={`text-newGray-700 dark:text-white font-bold text-sm ${isHeading && 'text-base'} ${className}`}>
    {children}
  </h1>
  )
}

export { Logo }