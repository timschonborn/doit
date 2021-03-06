export const schema = gql`
  type Todo {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    todos: [Todo!]! @skipAuth
    todo(id: Int!): Todo @skipAuth
  }

  input CreateTodoInput {
    title: String!
    body: String!
  }

  input UpdateTodoInput {
    title: String
    body: String
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @requireAuth
    updateTodo(id: Int!, input: UpdateTodoInput!): Todo! @requireAuth
    deleteTodo(id: Int!): Todo! @requireAuth
  }
`
