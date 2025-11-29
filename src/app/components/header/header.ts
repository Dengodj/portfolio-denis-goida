import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MobileMenu } from '../mobile-menu/mobile-menu';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MobileMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
