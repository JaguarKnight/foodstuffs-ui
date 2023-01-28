import { Component, Input } from '@angular/core';
import { MenuItem } from '../menu-item.type';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html'
})
export class MobileMenuComponent {
  @Input()
  menuItems: MenuItem[] = [];

  open = false;
}
