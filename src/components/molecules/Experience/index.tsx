import { Card, CardProps } from "../Card";

export interface ExperienceProps extends CardProps {
  noLine?: boolean
}

function Experience({ description, title, noLine = false }: ExperienceProps) {
  return (
    <li className="flex gap-4 md:gap-7">
      <div className="w-4 flex flex-col items-center md:w-6">
        <span className="w-4 h-4 border-2 border-newGray-700 dark:border-white mb-2 rounded-full md:mt-0.5 md:w-6 md:h-6" />
        
        { !noLine && (
          <span className="w-0 border border-newGray-700 dark:border-white flex-1" />
        )}
      </div>

      <Card
        description={description}
        title={title}
        className={noLine ? '' : 'mb-8 md:mb-16'}
      />
    </li>
  )
}

export { Experience }