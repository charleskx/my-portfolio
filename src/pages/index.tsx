import Head from 'next/head'

import type { NextPage } from 'next'
import { Footer } from '../components/templates/Footer'
import { ContactUs } from '../components/templates/ContactUs'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Charleston Amaral - Desenvolvedor Web Full Stack</title>
      </Head>
      
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
