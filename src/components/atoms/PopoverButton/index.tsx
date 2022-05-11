import { Popover } from "@headlessui/react"
import { ReactNode } from "react"

export interface PopoverButtonProps {
  children: ReactNode
  alt: string
}

function PopoverButton({ children, alt }: PopoverButtonProps) {
  return (
    <Popover.Button className="w-6 h-6 flex justify-center items-center m-0 p-0 opacity-80 hover:opacity-100 transition-opacity">
      <>
        <span className="hidden">{alt}</span>
        {children}
      </>
    </Popover.Button>
  )
}

export { PopoverButton }