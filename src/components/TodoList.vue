<template>
  <section>
      <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.todoItems" :key="todoItem.item" class="shadow">
            <input type="text" :value="todoItem.item" @blur="updateOneItem">
            <span class="removeBtn" type="button" @click="removeOneItem({todoItem, index})">
                <i class="far fa-trash-alt" aria-hidden="true"></i>
            </span>
        </li>
      </transition-group>
  </section>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
//   props: ['propsdata'],
  data() {
      return {
          inputText: ''
      }
  },

  methods: {
      ...mapMutations({
        updateOneItem : 'updateTodo',
        removeOneItem: 'removeTodo'//인자는 알아서 생성
      }),
    //   updateOneItem(todoItem) {
    //     this.$store.commit('updateTodo', todoItem)
    //   },
    //   removeTodo(todoItem, index) {
    //     //   this.$emit('removeTodo', todoItem, index)
    //     let obj={name: todoItem, index:index}
    //     this.$store.commit('removeTodo', obj);
    //   },
  },
  computed: {
      ...mapGetters(['todoItems'])
  }
}
</script>

<style>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .list-item {
        display :inline-black;
        margin-right: 10px;
    }
    .list-move {
        transition: transform 1s;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
