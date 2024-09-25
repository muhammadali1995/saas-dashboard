import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
} from '@angular/core';
import { RouterModule } from '@angular/router';
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
  @Input() active: boolean = false;
}
