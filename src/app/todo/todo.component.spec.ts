import { AppComponent } from './../app.component';
import { TodoService } from './../services/todo.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let appComponent: AppComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [ HttpClientModule]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    const appFixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    appComponent = appFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the value of ID to 1', () => {
    component.ID = 1;
    fixture.detectChanges();
    expect(component.ID).toEqual(1);
  });
  it('should emit a value from output', () => {
    component.renderCompleted.emit();
    expect(appComponent.renderCompleted()).toBe('render completed');
  });
});
