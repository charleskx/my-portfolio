import Head from 'next/head'

import type { NextPage } from 'next'

import { Logo } from '../components/atoms/Logo'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Charleston Amaral - Desenvolvedor Web Full Stack</title>
      </Head>

      <Logo isHeading>Charleston Amaral.</Logo>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default Home
