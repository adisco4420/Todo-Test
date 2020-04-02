import { TodoService } from './../services/todo.service';
import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface TodoI {
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() ID;
  @Output() renderCompleted = new EventEmitter();
  todo: TodoI;
  error: string;
  unsubscribe = new Subject();

  constructor(private todoSrv: TodoService) { }

  ngOnInit(): void {
    this.fetchTodo();

  }
  fetchTodo() {
    if (this.ID) {
      this.todo = this.error = null;
      this.todoSrv.getTodo(this.ID).pipe(takeUntil(this.unsubscribe)).subscribe((res: TodoI) => {
        this.todo = res;
        this.renderCompleted.emit();
      }, err => {
        this.error = err.message ? err.message : 'Error occured try again';
      });
    } else {

    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
