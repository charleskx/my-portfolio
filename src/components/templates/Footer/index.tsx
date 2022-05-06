import { Logo } from "../../atoms/Logo"
import { Paragraph } from "../../atoms/Paragraph"

function Footer() {
  return (
    <footer className="flex gap-1 flex-col px-6 py-8 bg-white dark:bg-newGray-200">
      <Logo>Charleston Amaral.</Logo>

      <Paragraph>
        Apaixonado por programação e empreendedorismo. Formado em Análise e Desenvolvimento de Sistemas, com mais de 10 anos de experiência na localização e implementação de soluções tecnológicas e gerenciamento de equipes.
      </Paragraph>
    </footer>
  )
}

export { Footer }