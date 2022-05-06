import { Hero } from "../../organisms/Hero";

function Intro() {
  return (
    <section className="px-6 pt-12 pb-16 bg-white dark:bg-newGray-200 md:px-32 md:py-24 md:flex md:flex-col md:items-center">
      <Hero />
    </section>
  )
}

export { Intro }