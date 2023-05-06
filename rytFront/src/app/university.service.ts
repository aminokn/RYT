import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { University } from "./university";
import { Teacher } from "./teacher";

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }
  getUniversities(): Observable<University[]>{
    return this.client.get<University[]>(`${this.BASE_URL}/api/universities/`)
  }
  getUniversity(id: number): Observable<University>{
    return this.client.get<University>(`${this.BASE_URL}/api/university/${id}`)
  }
  getUniversityTeachers(id: number): Observable<Teacher[]> {
    return this.client.get<Teacher[]>(`${this.BASE_URL}/api/university/${id}/teachers`)
  }

  getUnivesityNameById(id: number): Observable<University> {
    return this.client.get<University>(`${this.BASE_URL}/api/uni/${id}`);
  }

  sleep(ms: number){ 
    new Promise(r => setTimeout(r, ms));
  }
}
