import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ItemPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Item" description="Item page" />

      <h1>ItemPage</h1>
      <p>
        Find me in <code>./web/src/pages/ItemPage/ItemPage.tsx</code>
      </p>
      <p>My id is: {id}</p>
    </>
  )
}

export default ItemPage
