import { TextareaHTMLAttributes } from 'react'
import { useForm, RegisterOptions } from 'react-hook-form'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  validation?: RegisterOptions
}

function TextArea({ name, validation, ...props }: TextAreaProps) {
  const { register, formState: { errors } } = useForm()

  return (
    <div className='flex flex-col gap-1'>
      <textarea
        className='border border-newGray-100 dark:border-white bg-white dark:bg-newGray-800 rounded-xl px-4 py-2 text-xs leading-6 text-newGray-700 dark:text-white placeholder:opacity-30 focus:outline-newGray-700 dark:focus:outline-white resize-none h-36 ease-in-out duration-300'
        {...register(name, validation)}
        {...props}
      />

      {errors && (
        <span className='text-xs text-red-600'>
          {errors[name]?.message}
        </span>
      )}
    </div>
  )
}

export { TextArea }