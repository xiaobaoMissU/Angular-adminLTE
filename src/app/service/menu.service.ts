import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMemus() {
    const url = 'http://localhost:8080/database/getMenus?id=3';
    return this.http.get(url);
  }
}

