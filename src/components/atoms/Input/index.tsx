import { HTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string
}

function Input({ name, ...props }: InputProps) {
  const { register, formState: { errors } } = useForm()

  return (
    <div className='flex flex-col gap-1'>
      <input
        className='border border-newGray-50 bg-white rounded-xl px-4 py-2 text-xs leading-6 text-newGray-700 placeholder:opacity-30 focus:outline-newGray-700'
        {...register(name)}
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

export { Input }