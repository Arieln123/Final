import { Component, Input } from '@angular/core';
import { Person } from '../../core/models/usuario.model';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  @Input({required:true}) persona !:Person;

}
