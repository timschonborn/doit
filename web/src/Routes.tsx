// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import TodosLayout from 'src/layouts/TodosLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={TodosLayout}>
          <Route path="/admin/todos/new" page={TodoNewTodoPage} name="newTodo" />
          <Route path="/admin/todos/{id:Int}/edit" page={TodoEditTodoPage} name="editTodo" />
          <Route path="/admin/todos/{id:Int}" page={TodoTodoPage} name="todo" />
          <Route path="/admin/todos" page={TodoTodosPage} name="todos" />
        </Set>
      </Private>
      <Set wrap={DashboardLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/item/{id:Int}" page={ItemPage} name="item" />
        <Route path="/contact" page={ContactPage} name="contact" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
