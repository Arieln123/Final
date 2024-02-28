import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../models/usuario.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiService = inject(ApiService)



public async checkAuth(email:string, password: string): Promise<boolean>{

    let users: User[] = [];

    try{

      let res =  this.apiService.auth(email,password); // Recibo la respuesta de la api en forma de observable

      users = await lastValueFrom(res);// Transformo el observable en una promesa y espero a que se resuelva con el await. Lo que me devuelve es el User[] porque asi se puso en el apiService

    }catch(error){
      console.log(error);
    }

    return users.length == 1;
  }



}
