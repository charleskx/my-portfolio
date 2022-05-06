import { Projects, ProjectsProps } from "../../organisms/Projects"

function MyProjects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="bg-white px-6 pt-9 pb-16">
      <Projects projects={projects} />
    </section>
  )
}

export { MyProjects }