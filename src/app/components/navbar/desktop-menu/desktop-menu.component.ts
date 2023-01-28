import { Component, Input } from '@angular/core';
import { MenuItem } from '../menu-item.type';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html'
})
export class DesktopMenuComponent {
  @Input()
  menuItems: MenuItem[] = [];
}
