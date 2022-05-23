import { Form, Label, FieldError, TextField, Submit } from '@redwoodjs/forms'

const ProfileForm = () => {
  return (
    <div>
      <h1>Profile Form</h1>
      <Form>
        <Label name="name">Name</Label>
        <TextField name="name" />
        <FieldError name="name" />

        <Submit>Submit</Submit>
      </Form>
    </div>
  )
}

export default ProfileForm
