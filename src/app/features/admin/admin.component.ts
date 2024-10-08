import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faFilter,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../../shared/button/button.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { InputComponent } from '../../shared/input/input.component';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    FontAwesomeModule,
    TableComponent,
    DropdownComponent,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  faCoffee = faCoffee;
  faFilter = faFilter;
  faSearch = faSearch;

  options = ['Option 1', 'Option 2', 'Option 3'];

  tableColumns = [
    { label: 'Column 1', headerSort: false, field: 'column1' },
    { label: 'Column 2', headerSort: false, field: 'column2' },
    { label: 'Column 3', headerSort: true, field: 'column3' },
    { label: 'Column 4', headerSort: true, field: 'column4' },
    { label: 'Column 5', headerSort: false, field: 'column5' },
    { label: 'Column 6', headerSort: false, field: 'column6' },
    { label: 'Column 7', headerSort: false, field: 'column7' },
  ];

  tableData = [
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },

    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },

    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
    {
      column1: '8800912',
      column2: '8800912',
      column3: '8800912',
      column4: '8800912',
      column5: '8800912',
      column6: '8800912',
      column7: 'pending',
    },
  ];
}
