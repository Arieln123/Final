import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../core/models/usuario.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {


  


  
  public user: User = new User();

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  formulario: FormGroup = this.fb.group({
    email: ['',[Validators.required,]],
    password : ['',[Validators.required]],
 
  });


  public async checkAuth(){

    if(this.formulario){
      this.user.email = this.formulario.value.email;
      this.user.password = this.formulario.value.password;
     
      const check = this.authService.checkAuth(this.user.email, this.user.password);
      alert(check)
      if(await check){
        this.router.navigate(['/home']);
      }
      else{
        alert("No existe el usuario");
      }
    }



    
  }

}
