const addTodo = (dispatch, name) => {
  var date = Date.now()
  console.log(dispatch)
  dispatch.state.todoItems[date]=name
  localStorage.setItem(date, name)
}
const removeTodo = (dispatch, todoItemobj) => { //todoItem { name: '', index :0 }
  localStorage.removeItem(todoItemobj.todoItemKey)
  delete dispatch.state.todoItems[todoItemobj.todoItemKey]
  console.log(dispatch)
}

const updateTodo = (dispatch, todoItem) => {
  localStorage.setItem(todoItem[0], todoItem[1])

}
export {
  addTodo,
  removeTodo,
  updateTodo
}
