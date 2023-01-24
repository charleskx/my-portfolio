import { Experiences } from "../../organisms/Experiences"

const experiences = [
  {
    id: 1,
    title: 'Programador Pleno - Mundo Wap',
    description: 'Solução focada na gestão de operações de Merchandising e Trade Marketing. Web full-stack utilizando PHP para gerar relatórios de clientes, produtos e métricas de vendas. Front-end utilizando ReactJS para desenvolvimento de soluções.'
  },
  {
    id: 2,
    title: 'CTO - Metropolé 4',
    description: 'Plataforma de marketing de influência. Product Owner e web full-stack utilizando AdonisJS e NextJS para desenvolvimento da plataforma e cálculos de métricas. Além de testes (TDD) e controle de qualidade do código.'
  },
  {
    id: 3,
    title: 'Analista de Sistemas - Unidata',
    description: 'Soluções de automação para controle de abastecimento. UI e desenvolvedor front-end utilizando ReactJS para criação de dashboards e soluções personalizadas.'
  },
  {
    id: 4,
    title: 'Analista de Desenvolvimento de Sistemas - Instituto Brasileiro de Tecnologia e Ciência da Computação IBTCC',
    description: 'Desenvolvimento de APIs utilizando AWS Lambda e NodeJS além da criação de dashboards com ReactJS e Typescript.'
  }
]

function AboutUs() {
  return (
    <section id="aboutUs" className="px-6 pt-9 pb-16 bg-newGray-50 dark:bg-newGray-800 md:px-32 md:py-24 md:flex md:flex-col md:items-center">
      <Experiences experiences={experiences.sort((a, b) => b.id - a.id)} />
    </section>
  )
}

export { AboutUs }