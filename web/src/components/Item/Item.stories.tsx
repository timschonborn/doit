import Item from './Item'

export const generated = ({
  item = { id: '1', title: 'Test title', body: '', createdAt: Date.now() },
}) => {
  return <Item item={item} />
}

export default { title: 'Components/Item' }
