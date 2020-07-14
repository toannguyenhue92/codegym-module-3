import { Component, OnInit } from '@angular/core';

interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Array<ITodo>;

  constructor() { }

  ngOnInit() {
    this.todos = new Array<ITodo>();
  }

  addNewTodo(contentTodo: string) {
    this.todos.push({
      id: this.todos.length,
      content: contentTodo,
      complete: false
    });
  }

  toggleTodo(index: number) {
    this.todos[index].complete = !this.todos[index].complete;
  }

}
