import { render } from '@redwoodjs/testing/web'

import WeatherCard from './WeatherCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WeatherCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherCard />)
    }).not.toThrow()
  })
})
