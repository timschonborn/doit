import type { ItemsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link } from '@redwoodjs/router'

export const QUERY = gql`
  query ItemsQuery {
    items: todos {
      id
      title
      body
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
            <strong>{item.title}</strong>
            <Link to={`/todos/${item.id}`}>{item.id}</Link>
          </li>
        )
      })}
    </ol>
  )
}
