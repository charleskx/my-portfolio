import Head from 'next/head'

import type { NextPage } from 'next'
import { TextArea } from '../components/atoms/TextArea'

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
        <TextArea name='mensagem' placeholder='Mensagem' />
      </form>
    </>
  )
}

export default Home
