import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoID = 1;
  title = 'todo-test';

  renderCompleted() {
    alert('render completed');
    return 'render completed';
  }
  ngOnInit() {
    this.cal();
  }

  cal() {
    const sample = {'2019-01-01': 100, '2019-01-04': 115};
    const sample2 = {'2019-01-10': 10, '2019-01-11': 20, '2019-01-13': 10};
    this.solution(sample);
  }

  solution(D: {}) {
    let newD = {};
    Object.entries(D).forEach((entry: any, i, arr: any) => {
      const val = entry[1];
      const key = entry[0];
      let date = new Date(key);
      const next = arr[i + 1] ? arr[i + 1][1] :  null;
      for (let j = val; j <= next; j += 5) {
        const formattedDate = this.formatDate(date);
        newD = {...newD, [formattedDate]: j};
        date = new Date(date.setDate(date.getDate() + 1));
      }
    });
    newD = {...newD, ...D};
    console.log(newD);
    return newD;
  }
  formatDate(date) {
    return new Date(date).toJSON().split('T')[0];
  }
}
