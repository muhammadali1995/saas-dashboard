import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {
  @Input() text!: string;
  @Input() href!: string;
  @Input() icon: any = null;
  @Input() class: string = '';
}
