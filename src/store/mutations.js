
    const removeAll=(state) =>{
      console.log(state)
      localStorage.clear()
      state.todoItems=[]
    }


    export {removeAll}
