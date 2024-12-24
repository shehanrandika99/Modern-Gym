import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-program-card',
  imports: [],
  templateUrl: './program-card.component.html',
  styleUrl: './program-card.component.css'
})
export class ProgramCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  
}
