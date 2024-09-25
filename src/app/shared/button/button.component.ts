import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @ContentChildren(ElementRef, { descendants: true })
  children!: QueryList<ElementRef>;

  @Input() icon: any = null;
  @Input() class: string = '';
  @Input() variant: string = 'primary';
}
