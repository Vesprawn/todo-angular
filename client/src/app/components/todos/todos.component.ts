import { Component } from '@angular/core';
import { Todo } from './todos.model';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  inputTodo: string = ''

  todos: Todo[] = this.todoService.getTodos();

  constructor (private todoService: TodoService) {}

  toggleDone (id: number) {
    this.todoService.toggleDone(id);
    this.todos = this.todoService.getTodos();
  }

  deleteTodo (id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }

  addTodo () {
    this.todoService.addTodo({
      id: new Date().getTime(),
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = '';
    this.todos = this.todoService.getTodos();
  }
}
