import { render } from '@redwoodjs/testing/web'

import Item from './Item'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Item', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Item />)
    }).not.toThrow()
  })
})
