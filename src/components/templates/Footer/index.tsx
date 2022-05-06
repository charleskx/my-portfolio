import { Logo } from "../../atoms/Logo"
import { Paragraph } from "../../atoms/Paragraph"

function Footer() {
  return (
    <footer className="px-6 py-8 bg-white dark:bg-newGray-200 md:px-32 md:py-24 md:flex md:flex-col md:items-center">
      <div className="md:max-w-7xl w-full flex gap-1 flex-col">
        <Logo>Charleston Amaral.</Logo>

        <Paragraph className="md:mt-4 md:max-w-2xl">
          Apaixonado por programação e empreendedorismo. Formado em Análise e Desenvolvimento de Sistemas, com mais de 10 anos de experiência na localização e implementação de soluções tecnológicas e gerenciamento de equipes.
        </Paragraph>
      </div>
    </footer>
  )
}

export { Footer }