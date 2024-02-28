import { Component, inject, OnInit, signal, SimpleChange } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { Person } from '../../core/models/usuario.model';
import { ApiService } from '../../core/services/api.service';
import { PersonaComponent } from "../persona/persona.component";

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [PersonaComponent,RouterLinkWithHref,RouterLink]
})
export default class ListComponent implements OnInit{


  personas = signal<Person[]> ([]);

  private apiService = inject(ApiService);

  ngOnInit(): void {
    this.getAll();
  }


  OnChanges(){
    this.getAll();
  }

  getAll(){
    this.apiService.getPersons().subscribe({
      next:(data) =>{this.personas.set(data)},
      error:(err) =>{ alert('error')}
    })
  }




delete(id : number): void {
  const result = window.confirm('¿Estás seguro?');
  if (result) {
    this.apiService.delete(id).subscribe({
      next:()=>{alert('Usuario eliminado.');},
      error:()=>{alert('error al borrar usuario')}
    })
    
  }
  }
}
