import { ButtonHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: StaticImageData,
  alt: string
}

function IconButton({ alt, src, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className="w-6 h-6 flex justify-center items-center m-0 p-0 opacity-80 hover:opacity-100 transition-opacity"
      {...props}
    >
      <Image
        width={24}
        height={24}
        src={src}
        alt={alt}
      />
    </button>
  )
}

export { IconButton }