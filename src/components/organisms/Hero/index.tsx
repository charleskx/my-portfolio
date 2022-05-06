import { Button } from "../../atoms/Button"
import { Paragraph } from "../../atoms/Paragraph"

function Hero() {
  return (
    <>
      <Paragraph className="font-medium text-base leading-6">
        <strong>&lt;Desenvolvedor Web Full Stack de Sucesso</strong> com mais de 10 anos de experiência. /&gt;
      </Paragraph>

      <Paragraph className="mt-4 mb-8">
        Sinta-se a vontade para visualizar meu curriculum vitae e conhecer minhas experiências profissionais.
      </Paragraph>

      <Button>Download Resume</Button>
    </>
  )
}

export { Hero }