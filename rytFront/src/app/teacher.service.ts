import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Teacher } from "./teacher";
import { AuthToken } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }
  
  getTopTenTeachers(): Observable<Teacher[]>{
    return this.client.get<Teacher[]>(`${this.BASE_URL}/api/teachers/top_ten`)
  }
  getTeacher(id: number): Observable<Teacher>{
    return this.client.get<Teacher>(`${this.BASE_URL}/api/teacher/${id}`)
  }
  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/api/login/`,
        {
        username: username,
        password: password
      }
    )
  }
}
