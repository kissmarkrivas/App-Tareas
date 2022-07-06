import './styles.css';
import { TodoList,Todo } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
// console.log(todoList.todos);

todoList.todos.forEach(crearTodoHtml);

// console.log('todos',todoList.todos)