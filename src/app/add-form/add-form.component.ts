import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  placeholderText = 'Please enter todo list item';
  todoText = '';
  @Output() addTodoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo($event) {
    console.log('表單提交 ' , $event);
    this.addTodoEvent.emit(this.todoText);
  }
}
