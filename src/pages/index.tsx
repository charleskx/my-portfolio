import Head from 'next/head'

import type { NextPage } from 'next'
import { Input } from '../components/atoms/Input'

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
        <Input name='nome' placeholder='Informe seu nome completo' />
      </form>
    </>
  )
}

export default Home
