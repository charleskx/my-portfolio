import { Paragraph } from "../../atoms/Paragraph"
import { Form } from "../../molecules/Form"
import { Heading } from "../../molecules/Heading"

function FormContactUs() {
  return (
    <div className="md:max-w-2xl">
      <Heading
        title="Contato"
        subtitle="Contate-me"
      />

      <Paragraph className="mt-5 mb-10 md:mt-6">
        Caso você tenha uma pergunta ou apenas queira dizer oi, não hesite em usar o formulário.
      </Paragraph>

      <Form />
    </div>
  )
}

export {FormContactUs }