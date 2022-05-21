import { render } from '@redwoodjs/testing/web'

import ItemPage from './ItemPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ItemPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemPage />)
    }).not.toThrow()
  })
})
