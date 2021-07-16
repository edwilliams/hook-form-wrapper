import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Joi from 'joi'

const useValidationResolver = validationSchema =>
  useCallback(
    async data => ({
      values: await validationSchema.validate(data, {
        abortEarly: false
      }),
      errors: {}
    }),
    [validationSchema]
  )

const validationSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required()
})

export default function App() {
  const resolver = useValidationResolver(validationSchema)
  const { handleSubmit, register } = useForm({ resolver })

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register('username')} />
      <input type="submit" />
    </form>
  )
}
