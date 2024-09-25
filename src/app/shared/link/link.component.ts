import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {
  @ContentChildren(ElementRef, { descendants: true })
  children!: QueryList<ElementRef>;

  @Input() href!: string;
  @Input() icon: any = null;
  @Input() class: string = '';

  constructor(private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}
