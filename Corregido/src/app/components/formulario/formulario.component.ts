import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Isuer } from '../../core/models/iuser';
import { Person, User } from '../../core/models/usuario.model';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export default class FormularioComponent {

  

  person: Person = new Person();

  constructor(private fb: FormBuilder,private api:ApiService) { }

  formulario: FormGroup = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    lastname : ['',[Validators.required]],
    dni : ['',[Validators.required]],
    city : ['' ,Validators.required]
  });




  submit() {
    if (this.formulario.valid){
      this.person.name = this.formulario.value.name;
      this.person.city = this.formulario.value.city;
      this.person.dni = this.formulario.value.dni;
      this.person.lastname = this.formulario.value.lastname;
    
      
  
    alert('form valido');;


    this.api.addPerson(this.person).subscribe({
      next:() =>{ alert('se agrego la persona')},
      error:(err) =>{alert('error')}
    })

    }
    else
     alert('no funciono');
  }


}
