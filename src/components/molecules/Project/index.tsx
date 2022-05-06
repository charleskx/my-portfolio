import Image from "next/image"
import Link from "next/link"

import ArrowRightIcon from '../../../../public/assets/arrowRight.svg'
import { Card } from "../Card"

export interface ProjectProps {
  title: string
  description: string
  url: string
}

function Project({ description, title, url }: ProjectProps) {
  return (
    <div className="flex flex-col gap-4 items-end">
      <Card description={description} title={title} />

      <Link href={url}>
        <a
          className="flex justify-center gap-4 text-newGray-700 font-medium opacity-80 hover:opacity-100 transition-opacity"
          rel="noopener noreferrer" 
          target="_blank" 
          title={title}
        >
          Ver Projeto
          
          <Image
            src={ArrowRightIcon}
            width={24}
            height={24}
            alt="Seta indicativa para o lado direito"
            className="w-6 h-6"
          />
        </a>
      </Link>
    </div>
  )
}

export { Project }