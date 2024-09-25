import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [Input],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() name!: string;
}
