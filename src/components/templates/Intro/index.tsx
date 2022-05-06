import Link from "next/link";
import { Hero } from "../../organisms/Hero";
import { socials } from "../Header";

function Intro() {
  return (
    <section className="px-6 pt-12 pb-16 bg-white dark:bg-newGray-200 md:px-32 md:py-24 md:flex md:flex-col md:items-center">
      <Hero />

      <nav className="hidden md:block relative w-full m-0 p-0 self-center max-w-7xl">
        <ul className="absolute left-0 -bottom-24 flex flex-col items-center gap-10">
          {
            socials.map((network) => {
              return (
                <li key={network.alt}>
                  <Link href={network.url}>
                    <a
                      title={network.title}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {network.icon}
                    </a>
                  </Link>
                </li>
              )
            })
          }
          <li className="w-0 h-24 border border-newGray-700 dark:border-white" />
        </ul>
      </nav>
    </section>
  )
}

export { Intro }