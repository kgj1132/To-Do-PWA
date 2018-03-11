import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './store/getters.js'
import * as mutations from './store/mutations.js'

Vue.use(Vuex)

const storage= {
    fetch() {
        const items={}
            for (var i=0, keys=Object.keys(localStorage); i<localStorage.length; i++) {
                items[keys[i]]=localStorage.getItem(keys[i])
            }
            console.log(items)
        return items
    }
}


export const store =new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters,
    mutations:mutations,
    // getters : {
    //     todoItems(state) {
    //         return state.todoItems;
    //     }
    // },
    // mutations: {
    //     addTodo(state, name) {
    //         name in localStorage?'':state.todoItems.push(name);
    //         localStorage.setItem(name, name);
    //     },
    //     removeAll(state) {
    //       localStorage.clear();
    //       state.todoItems=[];
    //     },
    //     removeTodo(state, todoItem, index) { //todoItem { name: '', index :0 }
    //       localStorage.removeItem(todoItem, 1);
    //       state.todoItems.splice(index, 1);
    //     },
    //     updateTodo(state, todoItem) {
    //       localStorage.setItem(localStorage.getItem(todoItem.name));
    //     }
    // }
})