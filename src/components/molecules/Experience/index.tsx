import { Card, CardProps } from "../Card";

export interface ExperienceProps extends CardProps {
  noLine?: boolean
}

function Experience({ description, title, noLine = false }: ExperienceProps) {
  return (
    <li className="flex gap-4">
      <div className="w-4 flex flex-col items-center">
        <span className="w-4 h-4 border-2 border-newGray-700 mb-2 rounded-full" />
        
        { !noLine && (
          <span className="w-0 border border-newGray-700 flex-1" />
        )}
      </div>

      <Card
        description={description}
        title={title}
        className={noLine ? '' : 'mb-8'}
      />
    </li>
  )
}

export { Experience }