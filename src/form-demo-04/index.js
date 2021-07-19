import { Input, Select } from './components'
import Form from './form'

export default function App() {
  const onSubmit = data => console.log(data)

  return (
    <Form onSubmit={onSubmit}>
      <Input name="firstName" />
      <Input name="lastName" />
      <Select name="sex" options={['female', 'male']} />

      <button>Submit</button>
    </Form>
  )
}
