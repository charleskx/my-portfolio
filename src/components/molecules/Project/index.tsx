import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"

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
          className="flex justify-center gap-4 text-newGray-700 dark:text-white font-medium hover:text-newGray-200 dark:hover:text-newGray-50 transition-colors"
          rel="noopener noreferrer" 
          target="_blank" 
          title={title}
        >
          Ver Projeto

          <FiArrowRight className="w-6 h-6" />
        </a>
      </Link>
    </div>
  )
}

export { Project }