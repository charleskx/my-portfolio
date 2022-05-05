import { Paragraph } from "../../atoms/Paragraph"
import { CardProject, CardProjectProps } from "../../molecules/CardProject"
import { Heading } from "../../molecules/Heading"

interface ProjectProps extends CardProjectProps {
  id: string
}

export interface ContainerProjectsProps {
  projects?: Array<ProjectProps>
}

function ContainerProjects({ projects }: ContainerProjectsProps) {
  return (
    <>
      <Heading
        subtitle="Eu projeto e codifico coisas lindamente simples e adoro o que faço."
        title="Projetos"
      />

      <Paragraph className="mt-4 mb-12">
        No meu tempo livre, gosto de mexer em projetos paralelos. Esses são alguns dos resultados.
      </Paragraph>

      <div className="flex flex-col gap-10">
        {
          projects?.map((project) => {
            return (
              <CardProject
                key={project.id}
                description={project.description}
                title={project.title}
                url={project.url}
              />
            )
          })
        }
      </div>
    </>
  )
}

export { ContainerProjects }