import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('todo-test app is running!');
  });
  it('should expect solution function return a  Dictionary', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const data = {'2019-01-01': 100, '2019-01-04': 115};
    const result = {};
    const func = app.solution(data);
    expect(func).toBeInstanceOf(Object);
  });
  it('should expect solution function to return missing dates', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const data = {'2019-01-01': 100, '2019-01-04': 115};
    const result = {'2019-01-01': 100, '2019-01-02': 105, '2019-01-03': 110, '2019-01-04': 115};
    const func = app.solution(data);
    expect(func).toEqual(result);
  });
});
