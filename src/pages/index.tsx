import { useTheme } from "next-themes"
import Head from 'next/head'
import { useEffect, useState } from "react"
import { FiArrowUp } from "react-icons/fi"

import type { NextPage } from 'next'

import { IconButton } from "../components/atoms/IconButton"
import { ProjectProps } from '../components/molecules/Project'
import { AboutUs } from '../components/templates/AboutUs'
import { ContactUs } from '../components/templates/ContactUs'
import { Footer } from '../components/templates/Footer'
import { Header } from '../components/templates/Header'
import { Intro } from '../components/templates/Intro'
import { MyProjects } from '../components/templates/MyProjects'

import { removeHTMLTags } from '../helpers/words'

interface IGitHub {
  id: number
  name: string
  html_url: string
  description?: string
}

interface IProjects extends ProjectProps {
  id: number
}

const Home: NextPage = () => {
  const [scroll, setScroll] = useState(false)
  const [projects, setProjects] = useState<Array<IProjects>>([])

  const { theme } = useTheme()

  const colorTheme = theme === 'dark' ? '#2B3641' : '#FFFFFF'

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setScroll(window.scrollY > 500))
  }

  useEffect(() => {
    (async () => {
      const gitHubItems: Array<IProjects> = await fetch('https://api.github.com/users/charleskx/repos')
      .then((response) => response.json())
      .then((data) => {
        return data.sort((a: IGitHub, b: IGitHub) => b.id - a.id)
          .slice(0, 3)
          .map((gitHub: IGitHub, key: number) => {
            return {
              id: gitHub.id,
              description: removeHTMLTags(gitHub.description ?? ''),
              title: removeHTMLTags(`${(key + 1).toString().padStart(2, '0')}. ${gitHub.name}`),
              url: gitHub.html_url
            }
          })
      })

      setProjects(gitHubItems)
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Charleston Amaral - Desenvolvedor Web Full Stack</title>
        <meta name="theme-color" content={colorTheme} />
      </Head>

      { typeof window !== 'undefined' && scroll &&
        (
          <IconButton 
            className="hidden lg:flex items-center justify-center w-9 h-9 border-2 rounded-full fixed z-10 right-8 bottom-8 text-newGray-700 hover:text-newGray-200 border-newGray-700 dark:text-white dark:hover:text-newGray-50 dark:border-white transition-colors transition-all"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <FiArrowUp
              className="w-6 h-6"
            />
          </IconButton>
        )
      }

      <Header />
      <Intro />
      <AboutUs />
      <MyProjects projects={projects} />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
