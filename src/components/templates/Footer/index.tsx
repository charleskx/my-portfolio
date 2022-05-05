import { Logo } from "../../atoms/Logo"

function Footer() {
  return (
    <footer className="flex gap-1 flex-col px-6 py-8 bg-white">
      <Logo>Charleston Amaral.</Logo>

      <p className="text-xs leading-4 text-newGray-700">
        Apaixonado por programação e empreendedorismo. Formado em Análise e Desenvolvimento de Sistemas, com mais de 10 anos de experiência na localização e implementação de soluções tecnológicas e gerenciamento de equipes.
      </p>
    </footer>
  )
}

export { Footer }