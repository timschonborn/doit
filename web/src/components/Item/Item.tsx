import { Link, routes } from '@redwoodjs/router'

const Item = ({ item }) => {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 ring-slate-900/5">
      <header>
        <Link
          className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
          to={routes.item({ id: item.id })}
        >
          <h2>{item.title}</h2>
        </Link>
      </header>

      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        {item.body}
      </p>
      <small className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        {new Date(item.createdAt).toLocaleString()}
      </small>
    </article>
  )
}

export default Item
