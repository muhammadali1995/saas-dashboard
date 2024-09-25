import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faSort } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    CheckboxComponent,
    ButtonComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() columns!: any;
  @Input() data!: any;

  faCoffee = faCoffee;
  faSort = faSort;
}
