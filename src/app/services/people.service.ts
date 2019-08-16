import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }

  getPeople():Observable<Person[]> {
    return this.http.get<Person[]>('../../assets/peopleList.json');
  }
}
