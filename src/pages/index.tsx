import Head from 'next/head'

import type { NextPage } from 'next'
import { Footer } from '../components/templates/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Charleston Amaral - Desenvolvedor Web Full Stack</title>
      </Head>

      <Footer />
    </>
  )
}

export default Home
