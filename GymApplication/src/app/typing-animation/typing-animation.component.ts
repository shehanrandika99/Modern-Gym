import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.css']
})
export class TypingAnimationComponent implements OnInit {
  texts: string[] = [
    "Join Our Fitnes,",
    "Get the Body You,",
    "Transform Your Life",
  ];
  displayText: string = '';
  currentTextIndex: number = 0;
  charIndex: number = 0;
  typingSpeed: number = 150; // Typing speed in ms
  erasingSpeed: number = 100; // Erasing speed in ms
  delayBetweenTexts: number = 1500; // Delay before switching to the next text

  ngOnInit(): void {
    this.type();
  }

  type() {
    if (this.charIndex < this.texts[this.currentTextIndex].length) {
      this.displayText += this.texts[this.currentTextIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), this.typingSpeed);
    } else {
      setTimeout(() => this.erase(), this.delayBetweenTexts);
    }
  }

  erase() {
    if (this.charIndex > 0) {
      this.displayText = this.texts[this.currentTextIndex].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.erase(), this.erasingSpeed);
    } else {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      setTimeout(() => this.type(), this.typingSpeed);
    }
  }
}
