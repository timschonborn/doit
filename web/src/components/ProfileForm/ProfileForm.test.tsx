import { render } from '@redwoodjs/testing/web'

import ProfileForm from './ProfileForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileForm />)
    }).not.toThrow()
  })
})
