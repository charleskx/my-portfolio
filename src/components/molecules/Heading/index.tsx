import { Paragraph } from "../../atoms/Paragraph";
import { Title } from "../../atoms/Title";

export interface HeadingProps {
  title: string
  subtitle: string
}

function Heading({ subtitle, title }: HeadingProps) {
  return (
    <div className="flex flex-col gap-1">
      <Paragraph>{ title }</Paragraph>
      <Title>{ subtitle }</Title>
    </div>
  )
}

export { Heading }