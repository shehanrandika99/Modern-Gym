import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common'; 
import { NgFor } from '@angular/common'; 
import { CrouselComponent } from './crousel/crousel.component';
import {TrainersComponent} from './trainers/trainers.component';
import { ProgramComponent } from './program/program.component';

import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-root',
  imports: [
    NgFor,
    RouterOutlet,
    NavBarComponent,
    CommonModule,
    MatIconModule,
    
    CrouselComponent,
    TrainersComponent,
    ProgramComponent,
   

    
  ],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GymApplication';
  
}
