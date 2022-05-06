import { Paragraph } from "../../atoms/Paragraph"
import { Subtitle } from "../../atoms/Subtitle"

export interface CardProps {
  title: string
  description: string
  className?: string
}

function Card({ description, title, className }: CardProps) {
  return (
    <article className={`flex flex-col gap-2 w-full ${className}`}>
        <Subtitle>{title}</Subtitle>
        <Paragraph>{description}</Paragraph>
      </article>
  )
}

export { Card }