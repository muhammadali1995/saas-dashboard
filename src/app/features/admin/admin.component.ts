import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FontAwesomeModule, TableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  faCoffee = faCoffee;

}
