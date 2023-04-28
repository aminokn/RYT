import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Teacher } from "./teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }
  getTeachers(): Observable<Teacher[]>{
    return this.client.get<Teacher[]>(`${this.BASE_URL}/api/teachers/`)
  }
  getTeacher(id: number): Observable<Teacher>{
    return this.client.get<Teacher>(`${this.BASE_URL}/api/teachers/${id}/`)
  }

}
