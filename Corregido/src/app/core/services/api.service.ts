import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, User } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private http = inject(HttpClient);

  urlBase : string = `http://localhost:3000`;
  urlPersonas : string =`http://localhost:3000/persons`

  getPersons(){
    return this.http.get<Person[]>(this.urlPersonas)
  }

  addPerson( persona: Person){
   
   return this.http.post<boolean>(this.urlPersonas,persona);
  }

  getOne(id : string){
    const url = `${this.urlPersonas}/${id}`;
    return this.http.get<Person>(url)
  }

  put(id : string , data : Person){
    const url = `${this.urlPersonas}/${id}`;
    return this.http.put<boolean>(url,data);
  }

  delete(id : number ){
    const url = `${this.urlPersonas}/${id}`;
    return this.http.delete<boolean>(url);

  }




  auth(email:string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.urlBase}/users?email=${email}&password=${password}`);
  }







}
