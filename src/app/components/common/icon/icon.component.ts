import { Component, Input } from '@angular/core';
import { IconPaths, IconType } from './icon.type';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.template.html'
})
export class IconComponent {
  @Input()
  size: 'small' | 'medium' | 'large' = 'small';

  @Input()
  type: IconType = 'shopping-cart';

  getDimensionClasses(): string {
    switch (this.size) {
      case 'small':
        return 'h-8 w-8';
      case 'medium':
        return 'h-16 w-16';
      case 'large':
        return 'h-32 w-32';
      default:
        return 'h-8 w-8';
    }
  }

  getIconPath(): string {
    if (!Object.keys(IconPaths).includes(this.type)) {
      return '';
    }

    return IconPaths[this.type];
  }
}