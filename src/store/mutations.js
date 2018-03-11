
    const addTodo=(state, name) =>{
        name in localStorage?'':state.todoItems[Date.now()]=name
        localStorage.setItem(Date.now(),name)
        console.log(state.todoItems)
    }
    const removeAll=(state) =>{
      localStorage.clear();
      state.todoItems=[];
    }
    const removeTodo=(state, todoItemobj) => { //todoItem { name: '', index :0 }
      localStorage.removeItem(todoItemobj.todoItemKey);

      delete state.todoItems[todoItemobj.todoItemKey]
      console.log(state.todoItems)
      // state.todoItems.splice(todoItemobj.index, 1);
    }
    const updateTodo=(state, todoItem) => {
      console.log(todoItem)
      localStorage.setItem(todoItem.target._value,todoItem.target.value)
    }

    export {addTodo, removeAll, removeTodo, updateTodo}
