import { Paragraph } from "../../atoms/Paragraph"
import { Form } from "../../molecules/Form"
import { Heading } from "../../molecules/Heading"

function FormContactUs() {
  return (
    <>
      <Heading
        title="Contato"
        subtitle="Contate-me"
      />

      <Paragraph className="mt-5 mb-10">
        Caso você tenha uma pergunta ou apenas queira dizer oi, não hesite em usar o formulário.
      </Paragraph>

      <Form />
    </>
  )
}

export {FormContactUs }