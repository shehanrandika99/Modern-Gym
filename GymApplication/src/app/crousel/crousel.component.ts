import { Component } from '@angular/core';
import { TypingAnimationComponent } from '../typing-animation/typing-animation.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-crousel',
  imports: [
    TypingAnimationComponent,
    MatIconModule
  ],
  templateUrl: './crousel.component.html',
  styleUrl: './crousel.component.css'
})
export class CrouselComponent {
  words: string[] = ['Im', 'typed', 'one', 'after', 'another'];

}
