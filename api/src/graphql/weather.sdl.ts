export const schema = gql`
  type Weather {
    city: String!
    conditions: String!
    temp: Int!
    icon: String!
  }

  type Query {
    getWeather(lat: Float, lon: Float): Weather! @skipAuth
  }
`
