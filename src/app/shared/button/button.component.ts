import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() icon: any = null;
  @Input() class: string = '';
}
