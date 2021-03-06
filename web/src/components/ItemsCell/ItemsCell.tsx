import type { ItemsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Item from 'src/components/Item/Item'

export const QUERY = gql`
  query ItemsQuery {
    items: todos {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ items }: CellSuccessProps<ItemsQuery>) => {
  return (
    <ol>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Item item={item} />
          </li>
        )
      })}
    </ol>
  )
}
