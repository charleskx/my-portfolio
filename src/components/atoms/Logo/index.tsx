import { ReactNode } from "react"

export interface LogoProps {
  children: ReactNode
  isHeading?: boolean
}

function Logo({ children, isHeading = false }: LogoProps) {
  return (
  <h1 className={`text-newGray-700 font-bold text-sm ${isHeading && 'text-base'}`}>
    {children}
  </h1>
  )
}

export { Logo }