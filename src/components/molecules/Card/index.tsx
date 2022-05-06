import { Paragraph } from "../../atoms/Paragraph"
import { Subtitle } from "../../atoms/Subtitle"

export interface CardProps {
  title: string
  description: string
}

function Card({ description, title }: CardProps) {
  return (
    <article className="flex flex-col gap-2 w-full">
        <Subtitle>{title}</Subtitle>
        <Paragraph>{description}</Paragraph>
      </article>
  )
}

export { Card }