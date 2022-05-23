import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ItemsCell from 'src/components/ItemsCell'
import WeatherCard from 'src/components/WeatherCard/WeatherCard'
// import { Form, TextField, Submit } from '@redwoodjs/forms'
import WeatherCell from 'src/components/WeatherCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <WeatherCard />
      <ItemsCell />
      {/* <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField
          name="city"
          placeholder="City code"
          validation={{ required: true }}
        />

        <Submit>Go</Submit>
      </Form> */}
      <WeatherCell lat={52.092876} lon={5.10448} />
    </>
  )
}

export default HomePage
