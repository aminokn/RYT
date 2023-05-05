import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { University } from "./university";
import { Teacher } from "./teacher";
import { AuthToken } from './university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }
  getUniversities(): Observable<University[]>{
    return this.client.get<University[]>(`${this.BASE_URL}/api/universities/`)
  }
  getUniversityTeachers(id: number): Observable<Teacher[]> {
    return this.client.get<Teacher[]>(`${this.BASE_URL}/api/universities/${id}/teachers/`)
  }
  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }

}
