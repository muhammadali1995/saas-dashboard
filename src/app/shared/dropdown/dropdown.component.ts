import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Input() options!: string[];
  @Input() defaultValue: string = 'Select an option';
  @Input() variant: string = 'primary';
  @Input() icon: any;
  @Input() direction: string = 'ltr';

  isOpen = false;
  selected: string | null = null;
  arrowDown = faChevronDown;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selected = option;
    this.isOpen = false;
  }
}
