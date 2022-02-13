<template>
  <div id="todo-list-example">
    <form @submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
      >
      <button>Add</button>
    </form>
    <ul>
      <li
          is="todo-item"
          v-for="(todo, index) in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="todos.splice(index, 1)"
      ></li>
    </ul>

    <br/>

    <base-input
        label="7777777"
        rtertwer="333"
        ttttyt="222"
        @focus="focusEvent"
        @blur="blurEvent"
    />
  </div>
</template>

<script>
import todoItem from './todo-item.vue';
import baseInput from '../base-input.vue';

export default {
  name: "todo-list-example",

  components: {
    todoItem,
    baseInput,
  },

  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },

  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = '';
    },
    focusEvent() {
      console.log('focusEvent --- ');
    },
    blurEvent() {
      console.log('blurEvent --- ');
    }
  },

}
</script>

<style scoped>

</style>