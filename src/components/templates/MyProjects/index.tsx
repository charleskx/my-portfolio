import { ContainerProjects, ContainerProjectsProps } from "../../organisms/ContainerProjects"

function MyProjects({ projects }: ContainerProjectsProps) {
  return (
    <section id="projects" className="bg-white px-6 pt-9 pb-16">
      <ContainerProjects projects={projects} />
    </section>
  )
}

export { MyProjects }