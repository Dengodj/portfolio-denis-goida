import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
})
export class MobileMenu {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
}
