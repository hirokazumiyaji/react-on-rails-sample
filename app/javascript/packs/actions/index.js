let nextTodoId = 1
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const initialize = (props) => {
  if (props.todos.length > 0) {
    nextTodoId = Math.max(props.todos.map((t, i) => t.id))
  }
  return {
    type: 'INITIALIZE',
    todos: props.todos
  }
}
