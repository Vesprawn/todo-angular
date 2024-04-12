import { Component } from '@angular/core';
import { Todo } from './todos.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  inputTodo: string = ''

  todos: Todo[] = [
    {
      content: 'First todo',
      completed: false,
      id: 0
    },
    {
      content: 'Second todo',
      completed: true,
      id: 1
    }
  ];

  toggleDone (id: number) {
    this.todos = this.todos.map(a => ({...a, completed: (a.id === id) ? !a.completed : a.completed}))
  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter(a => a.id !== id)
  }

  addTodo () {
    this.todos = [
      ...this.todos,
      {
        id: new Date().getTime(),
        content: this.inputTodo,
        completed: false
      }
    ]

    this.inputTodo = ''
  }
}
