import {
  TextField,
  Label,
  Form,
  Submit,
  useForm,
  FieldError,
  FormError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your message')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    // const { name, email, message } = data
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />

      <Form onSubmit={onSubmit} formMethods={formMethods} error={error}>
        <FormError error={error} wrapperClassName="form-error" />
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="error" />

        <Submit>Send</Submit>
      </Form>
    </>
  )
}

export default ContactPage
