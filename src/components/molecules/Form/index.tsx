import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../../atoms/Button"
import { Input } from "../../atoms/Input"
import { TextArea } from "../../atoms/TextArea"

interface IForm {
  name: string
  email: string
  subject: string
  message: string
}

function Form() {
  const { handleSubmit } = useForm<IForm>()

  const onSubmitting: SubmitHandler<IForm> = (data) => {
    // TODO: tratamento do formulário
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmitting)}
    >
      <Input
        name="name"
        placeholder="Nome Completo"
        validation={{ required: true, min: 5 }}
      />

      <Input
        name="email"
        placeholder="E-mail"
        validation={{ required: true, pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i }}
      />

      <Input name="subject" placeholder="Assunto (Opcional)" />

      <TextArea
        name="message"
        placeholder="Mensagem"
        validation={{ required: true, min: 10 }}
      />

      <Button className="w-full" type="submit">Enviar</Button>
    </form>
  )
}

export { Form }