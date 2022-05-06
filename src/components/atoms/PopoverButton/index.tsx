import Image, { StaticImageData } from "next/image"
import { Popover } from "@headlessui/react"

export interface PopoverButtonProps {
  alt: string
  src: StaticImageData
}

function PopoverButton({ alt, src }: PopoverButtonProps) {
  return (
    <Popover.Button className="w-6 h-6 flex justify-center items-center m-0 p-0 opacity-80 hover:opacity-100 transition-opacity">
      <Image
        className="w-6 h-6"
        alt={alt}
        src={src}
      />
    </Popover.Button>
  )
}

export { PopoverButton }