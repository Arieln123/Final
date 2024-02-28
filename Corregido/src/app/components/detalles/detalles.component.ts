import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../../core/models/usuario.model';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export  default class DetallesComponent implements OnInit {

  @Input() id?: string;
  private apiService = inject(ApiService);
  
  ngOnInit(): void {
    
   if(this.id){
    this.apiService.getOne(this.id).subscribe({
      next:(data)=>{this.persona=data},
     
      error: (err) =>{alert('error en detalles')}
    })
   }
  }


  persona : Person = new Person();;



 

  constructor(private fb: FormBuilder,private api:ApiService) { }

  formulario: FormGroup = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    lastname : ['',[Validators.required]],
    dni : ['',[Validators.required]],
    city : ['' ,Validators.required]
  });




  submit() {
    if (this.formulario.valid && this.id){
      this.persona.name = this.formulario.value.name;
      this.persona.city = this.formulario.value.city;
      this.persona.dni = this.formulario.value.dni;
      this.persona.lastname = this.formulario.value.lastname;
    
      
  
    alert('form valido');;


    this.api.put(this.id,this.persona).subscribe({
      next:() =>{ alert('se agrego la persona')},
      error:(err) =>{alert('error')}
    })

    }
    else
    alert('no funciono');
  }

  editarCampos = false; // Inicialmente, los campos no están editables


  toggleEditarCampos() {
    this.editarCampos = !this.editarCampos;
}


}
