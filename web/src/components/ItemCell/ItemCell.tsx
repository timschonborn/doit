import type { FindItemQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Item from '../Item/Item'

export const QUERY = gql`
  query FindItemQuery($id: Int!) {
    item: todo(id: $id) {
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

export const Success = ({ item }: CellSuccessProps<FindItemQuery>) => {
  return <Item item={item} />
}
