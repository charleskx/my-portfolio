import Head from 'next/head'

import type { NextPage } from 'next'
import { Footer } from '../components/templates/Footer'
import { ContactUs } from '../components/templates/ContactUs'
import { ContainerProjects } from '../components/organisms/ContainerProjects'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Charleston Amaral - Desenvolvedor Web Full Stack</title>
      </Head>

      <ContainerProjects
        projects={[
          {
            id: '1',
            description: 'Quickly build beautiful React apps. AEGIR is a simple, customizable component library for building React apps faster and more affordable. Follow your own design system.',
            title: '03. aegir-components',
            url: 'https://github.com/charleskx/aegir-components'
          },
          {
            id: '2',
            description: 'Quickly build beautiful React apps. AEGIR is a simple, customizable component library for building React apps faster and more affordable. Follow your own design system.',
            title: '03. aegir-components',
            url: 'https://github.com/charleskx/aegir-components'
          },
          {
            id: '3',
            description: 'Quickly build beautiful React apps. AEGIR is a simple, customizable component library for building React apps faster and more affordable. Follow your own design system.',
            title: '03. aegir-components',
            url: 'https://github.com/charleskx/aegir-components'
          }
        ]}
      />
      
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
