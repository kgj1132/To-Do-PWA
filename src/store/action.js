import Vue from 'vue' //반응형으로 추가삭제를 위해 생성

const addTodo = (dispatch, name) => {
  var date = Date.now()
  Vue.set(dispatch.state.todoItems,date,name)  //객체 추가방법
  localStorage.setItem(date, name)
}
const removeTodo = (dispatch, todoItemobj) => { //todoItem { name: '', index :0 }
  localStorage.removeItem(todoItemobj.todoItemKey)
  Vue.delete(dispatch.state.todoItems,todoItemobj.todoItemKey)//객체 삭제방법
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
