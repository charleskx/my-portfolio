import { Card, CardProps } from "../Card";

function Experience({ description, title }: CardProps) {
  return (
    <li>
      <div>
        <span />
        <span />
      </div>

      <Card
        description={description}
        title={title}
      />
    </li>
  )
}

export { Experience }