import type { GetWeatherQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query GetWeatherQuery($city: String!) {
    weather: getWeather(city: $city) {
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <span
    style={{
      backgroundColor: '#ffdfdf',
      color: '#990000',
      padding: '0.5rem',
      display: 'inline-block',
    }}
  >
    {error.message}
  </span>
)

export const Success = ({ weather }) => {
  return (
    <section>
      <h1>{weather.city}</h1>
      <h2>
        <div style={{ backgroundColor: 'lightblue', display: 'inline' }}>
          <img alt="" src={weather.icon} style={{ maxWidth: '2rem' }} />
        </div>
        <span>
          {weather.temp}°C and {weather.conditions}
        </span>
      </h2>
    </section>
  )
}
