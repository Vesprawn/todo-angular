import { Injectable } from '@angular/core';
import { Todo } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = []

  constructor() { }

  getTodos () {
    return this.todos
  }

  addTodo (a: Todo) {
    this.todos = [...this.todos, a]
  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter(a => a.id !== id);
  }
  
  toggleDone (id: number) {
    this.todos = this.todos.map(a => {
      return {
        ...a,
        completed: (a.id === id) ? !a.completed : a.completed
      }
    })
  }
}
