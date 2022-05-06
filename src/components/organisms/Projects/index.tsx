import { Paragraph } from "../../atoms/Paragraph"
import { Project, ProjectProps } from "../../molecules/Project"
import { Heading } from "../../molecules/Heading"

interface ProjectsItemProps extends ProjectProps {
  id: number
}

export interface ProjectsProps {
  projects?: Array<ProjectsItemProps>
}

function Projects({ projects }: ProjectsProps) {
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
              <Project
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

export { Projects }