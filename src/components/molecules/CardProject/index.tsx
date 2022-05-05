import Image from "next/image"
import Link from "next/link"

import { Paragraph } from "../../atoms/Paragraph"
import { Subtitle } from "../../atoms/Subtitle"

import ArrowRightIcon from '../../../../public/assets/arrowRight.svg'

export interface CardProjectProps {
  title: string
  description: string
  url: string
}

function CardProject({ description, title, url }: CardProjectProps) {
  return (
    <div className="flex flex-col gap-4 items-end">
      <article className="flex flex-col flex-1 gap-2">
        <Subtitle>{title}</Subtitle>
        <Paragraph>{description}</Paragraph>
      </article>

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

export { CardProject }