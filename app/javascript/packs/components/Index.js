import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

class Index extends React.Component {
  render() {
    return (
      <div>
        Hello
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <UndoRedo />
      </div>
    )
  }
}

export default Index
