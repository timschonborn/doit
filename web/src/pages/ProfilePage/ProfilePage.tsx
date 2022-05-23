import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProfileForm from 'src/components/ProfileForm/ProfileForm'

const ProfilePage = () => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <ProfileForm />
    </>
  )
}

export default ProfilePage
