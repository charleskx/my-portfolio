import Head from 'next/head'

import type { GetStaticProps, NextPage } from 'next'

import { Footer } from '../components/templates/Footer'
import { ContactUs } from '../components/templates/ContactUs'
import { MyProjects } from '../components/templates/MyProjects'
import { ProjectsProps } from '../components/organisms/Projects'
import { ProjectProps } from '../components/molecules/Project'
import { AboutUs } from '../components/templates/AboutUs'
import { Hero } from '../components/organisms/Hero'

interface IGitHub {
  id: number
  name: string
  html_url: string
  description?: string
}

interface IProjects extends ProjectProps {
  id: number
}

interface HomeProps {
  projects?: Array<IProjects>
}

const Home: NextPage = ({ projects }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Charleston Amaral - Desenvolvedor Web Full Stack</title>
      </Head>

      <Hero />
      <AboutUs />
      <MyProjects projects={projects} />
      <ContactUs />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: ProjectsProps = await fetch('https://api.github.com/users/charleskx/repos')
    .then((response) => response.json())
    .then((data) => {
      return data.sort((a: IGitHub, b: IGitHub) => b.id - a.id)
        .slice(0, 3)
        .map((gitHub: IGitHub, key: number) => {
          return {
            id: gitHub.id,
            description: gitHub.description ?? '',
            title: `${(key + 1).toString().padStart(2, '0')}. ${gitHub.name}`,
            url: gitHub.html_url
          }
        })
    })

  return {
    props: {
      projects
    }
  }
}

export default Home
