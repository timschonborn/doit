import { Link, routes } from '@redwoodjs/router'

const Item = ({ item }) => {
  return (
    <article>
      <header>
        <Link to={routes.item({ id: item.id })}>
          <h2>{item.title}</h2>
        </Link>
      </header>
      <p>{item.body}</p>
      <small>{item.createdAt}</small>
    </article>
  )
}

export default Item
