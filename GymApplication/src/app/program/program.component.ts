import { Component } from '@angular/core';
import { ProgramCardComponent } from '../program-card/program-card.component';
import { ProgramCard } from '../models/program-card.model';
import { ProgramCardData } from '../utils/program-card-data';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-program',
  standalone: true,
  imports: [
    ProgramCardComponent,
    NgFor
  ],
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
  
})
export class ProgramComponent {
  cards: ProgramCard[] = ProgramCardData.getCards();
}
