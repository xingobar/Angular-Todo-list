import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TodoItem} from '../shared/todo-item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[]; // from parent to child
  @Output() deleteTodoEvent = new EventEmitter();
  @Output() toggleDoneItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  itemClick(item) {
    this.toggleDoneItem.emit(item);
  }

  delete(item){
    this.deleteTodoEvent.emit(item);
  }
}
