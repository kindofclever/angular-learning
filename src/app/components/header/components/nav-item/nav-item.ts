import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-item',
  imports: [CommonModule, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.css',
})
export class NavItem {
  @Input() route!: string | string[];
  @Input() label!: string;
  @Input() onClick?: () => void;
}
