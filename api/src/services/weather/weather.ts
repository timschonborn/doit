import { fetch } from 'cross-undici-fetch'
import { UserInputError } from '@redwoodjs/graphql-server'

export const getWeather = async ({ lat, lon }) => {
  // return {
  //   city: 'json.name',
  //   conditions: { weather: 'sunny' },

  //   temp: 0,
  //   icon: `http://openweathermap.org/img/wn/${db}@2x.png`,
  // }

  console.log('getWeather')

  // const geo = await fetch(
  //   `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${LIMIT}&appid=${process.env.OPENWEATHERMAP_API_KEY}`
  // )

  // console.log(geo)

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
  )

  const json = await response.json()

  // if (json.cod === '404') {
  //   throw new UserInputError(
  //     `${city} isn't a valid US zip code, please try again`
  //   )
  // }

  return {
    city: json.name,
    conditions: json.weather[0].main,
    temp: Math.round(json.main.temp),
    icon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
  }
}
