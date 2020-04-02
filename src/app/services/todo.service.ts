import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseurl = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodo(id) {
    return this.http.get(`${this.baseurl}/${id}`);
  }
}
