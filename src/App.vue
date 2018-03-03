<template>
  <div id="app">
    <TodoInput @addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter @removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  props: ['propsdata'],
  data() {
      return {
          todoItems: []
      }
  },
  methods: {
    addTodo(todoItem) {
        todoItem in localStorage?'':this.todoItems.push(todoItem);
        localStorage.setItem(todoItem, todoItem);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems=[];
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      console.log(index);
      this.todoItems.splice(index, 1);
    },
    updateTodo(todoItem,index) {
      localStorage.setItem(localStorage.getItem(todoItem));
    }
  },
  created() {
      if (localStorage.length>0) {
          for (var i=0; i<localStorage.length; i++) {
              this.todoItems.push(localStorage.key(i));
          }
      }
  },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03)
  }
</style>
