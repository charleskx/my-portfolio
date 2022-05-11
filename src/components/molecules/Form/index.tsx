import { Field, Formik } from "formik"
import * as Yup from "yup"

import { Button } from "../../atoms/Button"
import { Input } from "../../atoms/Input"
import { TextArea } from "../../atoms/TextArea"

interface IForm {
  name: string
  email: string
  subject?: string
  message: string
}

function Form() {
  const initialValues: IForm = {
    email: '',
    message: '',
    name: '',
    subject: ''
  }

  const contactSchema = Yup.object().shape({
    email: Yup.string()
      .email('Informe um endereço de e-mail válido.')
      .required('Informe um endereço de e-mail.'),
    message: Yup.string()
      .required('Informe sua mensagem')
      .min(10, 'Sua mensagem deve conter mais que 10 caracteres.'),
    name: Yup.string()
      .required('Informe seu nome.')
      .min(10, 'Por favor, informe seu nome completo.'),
    subject: Yup.string().nullable()
  })

  const onSubmitting = async (data: IForm) => {
    // TODO: tratamento do formulário
    console.log('onSubmitting', data)
  }

  return (
    <Formik
      onSubmit={onSubmitting}
      initialValues={initialValues}
      validationSchema={contactSchema}
    >
      {
        ({ handleSubmit }) => (
          <form
            className="flex flex-col gap-4 md:gap-6 md:items-end"
            onSubmit={handleSubmit}
          >
            <Field
              name="name"
              placeholder="Nome Completo"
              component={Input}
            />

            <Field
              name="email"
              type="email"
              placeholder="E-mail"
              component={Input}
            />

            <Field
              name="subject"
              placeholder="Assunto (Opcional)"
              component={Input}
            />

            <Field
              name="message"
              placeholder="Mensagem"
              component={TextArea}
            />

            <Button className="w-full md:w-52" type="submit">Enviar</Button>
          </form>
        )
      }
    </Formik>
  )
}

export { Form }