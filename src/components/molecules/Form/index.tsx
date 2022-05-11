import { Field, Formik } from "formik"
import { useState } from "react"
import * as Yup from "yup"

import { Button } from "../../atoms/Button"
import { Input } from "../../atoms/Input"
import { Paragraph } from "../../atoms/Paragraph"
import { TextArea } from "../../atoms/TextArea"

interface IForm {
  name: string
  email: string
  subject?: string
  message: string
}

interface IMessageSent {
  type: 'success' | 'error'
  message: string
}

function Form() {
  const [loading, setLoading] = useState(false)
  const [messageSent, setMessageSent] = useState<IMessageSent>()

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
    try {
      setLoading(true)

      const formData = new FormData()

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })

      await fetch('https://getform.io/f/3677f0cb-38ab-471b-851b-5350e9a0f092', {
        method: 'POST',
        body: formData
      })

      setMessageSent({
        message: 'Mensagem enviada com sucesso! Retornaremos o seu contato o mais breve possível.',
        type: 'success'
      })
    } catch (error) {
      setMessageSent({
        message: 'Houve um erro ao enviar o formulário. Tente novamente!',
        type: 'error'
      })
    } finally {
      setLoading(false)
    }
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

            <div className="flex flex-col items-center gap-4 md:flex-row">
              <Paragraph className={`${messageSent?.type === 'success' ? 'text-green-500' : 'text-red-500'} text-center md:text-right md:flex-1`}>
                {messageSent?.message}
              </Paragraph>

              <Button className="w-full md:w-52" type="submit" loading={loading}>
                Enviar
              </Button>
            </div>
          </form>
        )
      }
    </Formik>
  )
}

export { Form }