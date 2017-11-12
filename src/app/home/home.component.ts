import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../shared/todo-item';
import {TodoService} from './../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    {provide: TodoService, useClass: TodoService}
  ]
})
export class HomeComponent implements OnInit {

  todoItems: TodoItem[] = [{
    id: 1,
    value : 'Todo Item no 1',
    done : false
  }, {
    id: 2,
    value: 'Todo Item no 2',
    done : false
  }, {
    id: 3,
    value : 'Todo Item no 3',
    done : false
  }];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.create({
      id: 1,
      value: 'Todo list item 1',
      done: false
    });
    this.todoService.create({
      id: 2,
      value: 'Todo list item 2',
      done: false
    });
    this.todoService.create({
      id: 3,
      value: 'Todo list item 3',
      done: false
    });
    this.refreshTodoList();
  }

  refreshTodoList() {
    this.todoItems = this.todoService.all();
  }

  addTodoItem(text) {
   this.todoService.create({
     id: (new Date()).getTime(),
     value: text,
     done: false
   });
   this.refreshTodoList();
  }

  deleteTodoItem(item: TodoItem){
    this.todoService.remove(item);
    this.refreshTodoList();
  }

  toggleDoneItem(item: TodoItem){
    this.todoService.toggleDone(item);
    this.refreshTodoList();
  }
}
