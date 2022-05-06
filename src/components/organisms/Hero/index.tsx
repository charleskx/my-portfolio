import { Button } from "../../atoms/Button"
import { Paragraph } from "../../atoms/Paragraph"
import { Title } from "../../atoms/Title"

function Hero() {
  return (
    <div className="md:flex md:flex-col md:items-center md:text-center">
      <Title className="font-medium text-base text-newGray-700 dark:text-white leading-6 md:text-3xl md:leading-10 md:max-w-4xl">
        <strong>&lt; Desenvolvedor Web Full Stack de Sucesso</strong> com mais de 10 anos de experiência. /&gt;
      </Title>

      <Paragraph className="mt-4 mb-8 md:mt-6 md:mb-10 md:max-w-2xl">
        Sinta-se a vontade para visualizar meu curriculum vitae e conhecer minhas experiências profissionais.
      </Paragraph>

      <Button className="md:w-52">Download Resume</Button>
    </div>
  )
}

export { Hero }