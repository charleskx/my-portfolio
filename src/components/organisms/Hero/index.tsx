import { Button } from "../../atoms/Button"
import { Paragraph } from "../../atoms/Paragraph"
import { Title } from "../../atoms/Title"

function Hero() {
  return (
    <>
      <Title className="font-medium text-base text-newGray-700 leading-6">
        <strong>&lt;Desenvolvedor Web Full Stack de Sucesso</strong> com mais de 10 anos de experiência. /&gt;
      </Title>

      <Paragraph className="mt-4 mb-8">
        Sinta-se a vontade para visualizar meu curriculum vitae e conhecer minhas experiências profissionais.
      </Paragraph>

      <Button>Download Resume</Button>
    </>
  )
}

export { Hero }