import Head from 'next/head'

import type { NextPage } from 'next'
import { IconButton } from '../components/atoms/IconButton'
import MenuIcon from '../../public/assets/menu.svg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Charleston Amaral - Desenvolvedor Web Full Stack</title>
      </Head>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <IconButton src={MenuIcon} alt="Ícone menu de navegação" />
    </>
  )
}

export default Home
