import {
  Form,
  Label,
  FieldError,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { useState } from 'react'

const DUMMY_PROFILE = {
  name: 'Tim Schoenborn',
  email: 't.j.schonborn@gmail.com',
  bio: "I'm a software engineer, and I'm passionate about building software that improves the world.",
  image: 'https://github.com/timschonborn.png?size=200',
}

const ProfileForm = ({ profileData = DUMMY_PROFILE }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const onSubmit = (values) => console.log(values)

  return (
    <>
      <div className="bg-slate-100 flex">
        <div className="w-full max-w-md pt-8 m-auto">
          <div className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
            <div className="bg-whiterounded pt-2">
              <div className="flex justify-center items-center pt-2 pb-2">
                <img
                  src={profileData.image}
                  className="mb-4 object-cover w-16 h-16 rounded-full"
                  alt="user-profile"
                />
              </div>
              <h1 className="text-center text-slate-800 text-xl">
                Public profile
              </h1>

              <Form
                onSubmit={handleSubmit(onSubmit)}
                className="px-8 pt-4 pb-8 mb-4 lg:w1/2"
              >
                <Label
                  name="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </Label>
                <TextField
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  id="username"
                  placeholder="Username"
                  defaultValue={profileData.name}
                />

                <FieldError name="name" />
                <small className="ml-1 text-xs text-gray-600">
                  Your public display name.
                </small>

                <Label
                  name="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </Label>
                <TextField
                  name="email"
                  id="email"
                  className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={profileData.email}
                />
                <FieldError name="email" />

                <Submit className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mt-4 rounded">
                  Update
                </Submit>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileForm
