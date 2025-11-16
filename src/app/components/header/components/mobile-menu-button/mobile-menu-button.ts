import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mobile-menu-button',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './mobile-menu-button.html',
  styleUrl: './mobile-menu-button.css',
})
export class MobileMenuButton {
  @Input() isOpen: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}
