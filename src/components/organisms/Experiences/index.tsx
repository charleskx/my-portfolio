import { Paragraph } from "../../atoms/Paragraph"
import { Card, CardProps } from "../../molecules/Card"
import { Experience } from "../../molecules/Experience"
import { Heading } from "../../molecules/Heading"

interface ExperienceItem extends CardProps {
  id: number
}

export interface ExperiencesProps {
  experiences: Array<ExperienceItem>
}

function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className="md:max-w-7xl w-full">
      <Heading
        subtitle="Olá, sou Charleston. Prazer em conhecê-lo."
        title="Sobre mim"
      />

      <Paragraph className="mt-4 mb-12 md:mt-6 md:mb-32">
        Gosto de criar coisas que vivem na internet. Meu interesse em desenvolvimento web começou em 2011, quando decidi tentar editar temas personalizados do Orkut - descobri que personalizar um perfil de rede social me ensinou muito sobre HTML e CSS e JavaScript, mesmo que o perfil só ficasse estilizado na minha maquina!
      </Paragraph>

      <ol className="flex flex-col gap-2">
        {
          experiences.map((experience, key: number) => {
            return (
              <Experience
                noLine={experiences.length === (key + 1)}
                description={experience.description}
                title={experience.title}
                key={experience.id}
              />
            )
          })
        }
      </ol>
    </div>
  )
}

export { Experiences }