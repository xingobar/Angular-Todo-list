import { Injectable } from '@angular/core';
import {TodoItem} from './shared/todo-item';

@Injectable()
export class TodoService {

  todoItems: Array<TodoItem> = [];

  constructor() { }

  create(item: TodoItem): void {
    this.todoItems.push(item);
    console.log(this.todoItems);
  }

  all(): TodoItem[]{
    return this.todoItems;
  }

  toggleDone(item: TodoItem): void{
    let index = this.todoItems.indexOf(item);
    this.todoItems[index].done = !this.todoItems[index].done;
  }

  remove(item: TodoItem): void{
    this.todoItems.splice(this.todoItems.indexOf(item), 1);
  }
}
