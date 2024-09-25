import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LinkComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  faFile = faFile;

  links = [
    { name: 'link', icon: faFile, href: '#' },
    { name: 'link', icon: faFile, href: '#' },
  ];
}
