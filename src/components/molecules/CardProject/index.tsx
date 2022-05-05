import { Paragraph } from "../../atoms/Paragraph"
import { Subtitle } from "../../atoms/Subtitle"

export interface CardProjectProps {
  title: string
  description: string
}

function CardProject({ description, title }: CardProjectProps) {
  return (
    <article className="flex flex-col gap-2">
      <Subtitle>{title}</Subtitle>
      <Paragraph>{description}</Paragraph>
    </article>
  )
}

export { CardProject }