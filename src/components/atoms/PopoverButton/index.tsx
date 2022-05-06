import { Popover } from "@headlessui/react"
import { ReactNode } from "react"

export interface PopoverButtonProps {
  children: ReactNode
}

function PopoverButton({ children }: PopoverButtonProps) {
  return (
    <Popover.Button className="w-6 h-6 flex justify-center items-center m-0 p-0 opacity-80 hover:opacity-100 transition-opacity">
      {children}
    </Popover.Button>
  )
}

export { PopoverButton }