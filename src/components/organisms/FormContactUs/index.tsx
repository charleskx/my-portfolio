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

      <Paragraph>
        Caso você tenha uma pergunta ou apenas queira dizer oi, não hesite em usar o formulário.
      </Paragraph>

      <Form />
    </>
  )
}

export {FormContactUs }