import { MetaTags } from '@redwoodjs/web'
import ItemCell from 'src/components/ItemCell'

const ItemPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Item" description="Item page" />

      <ItemCell id={id} />
    </>
  )
}

export default ItemPage
