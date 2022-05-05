import Head from 'next/head'

import type { NextPage } from 'next'
import { Button } from '../components/atoms/Button'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Charleston Amaral - Desenvolvedor Web Full Stack</title>
      </Head>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <form>
        <Button>Enviar</Button>
      </form>
    </>
  )
}

export default Home
