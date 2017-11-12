import { Component } from '@angular/core';
import {TodoItem} from './shared/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  todoItems: TodoItem[] = [{
    id: 1,
    value : 'Todo Item no 1',
    done : false
  },{
    id: 2,
    value: 'Todo Item no 2',
    done : false
  },{
   id: 3,
    value : 'Todo Item no 3',
    done : false
  }];

  addTodoItem(text) {
    console.log(text);
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  deleteTodoItem(item){
    console.log('Delete ' , item);
    this.todoItems.splice(this.todoItems.indexOf(item),1);
  }
}
