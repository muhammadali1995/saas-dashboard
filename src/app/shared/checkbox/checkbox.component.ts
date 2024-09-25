import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  @Input() name!: string;

  faCheck = faCheck;
  checked: boolean = false;

  toggleCheckbox() {
    this.checked = !this.checked;
  }
}
