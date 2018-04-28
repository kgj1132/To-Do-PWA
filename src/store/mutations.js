
    const addTodo=(state, name) =>{
        // name in localStorage?'':state.todoItems[Date.now()]=name
        // localStorage.setItem(Date.now(),name)
        // console.log(state.todoItems)

        // Object 형태로 되어 있는 todoItems에 데이터를 추가하기 위한 변환 작업
        const obj = JSON.stringify({ completed: false, item: name });
        localStorage.setItem(name, obj);
        // @@ 주의 사항 : 할 일 목록을 배열이 아닌 객체로 관리하면 새롭게 추가된 property는 Vue에서 감지하지 못합니다.
        state.todoItems[name] = obj;
    }
    const removeAll=(state) =>{
      localStorage.clear();
      state.todoItems=[];
    }
    const removeTodo=(state, todoItemobj) => { //todoItem { name: '', index :0 }
      localStorage.removeItem(todoItemobj.todoItem.item);
      delete state.todoItems[todoItemobj.todoItem.item];
    }

    const updateTodo=(state, todoItem) => {
      console.log(todoItem)
      localStorage.setItem(todoItem[0],todoItem[1])
    }

    export {addTodo, removeAll, removeTodo, updateTodo}
