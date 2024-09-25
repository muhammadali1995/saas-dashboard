import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() name!: string;
  @Input() placeholder: string = '';
  @Input() icon: any;

  constructor() {
    console.log(name);
  }
}
