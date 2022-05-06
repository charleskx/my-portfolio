import { Projects, ProjectsProps } from "../../organisms/Projects"

function MyProjects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="bg-white dark:bg-newGray-200 px-6 pt-9 pb-16 md:px-32 md:py-24 md:flex md:flex-col md:items-center">
      <Projects projects={projects} />
    </section>
  )
}

export { MyProjects }