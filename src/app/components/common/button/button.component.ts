import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input()
  color: string = "green"

  @Input()
  disabled: boolean = false;

  @Input()
  onClick: () => void = () => { };

  @Input()
  label: string = "";

  getBackgroundColorClass(color: string): Object {
    switch (color) {
      case "green":
        return this.disabled
          ? ["bg-green-500"]
          : ["bg-green-500", "hover:bg-green-700"];
      case "red":
        return this.disabled
          ? ["bg-red-500"]
          : ["bg-red-500", "hover:bg-red-700"];
      case "blue":
        return this.disabled
          ? ["bg-blue-500"]
          : ["bg-blue-500", "hover:bg-blue-700"];
      case "yellow":
        return this.disabled
          ? ["bg-yellow-500"]
          : ["bg-yellow-500", "hover:bg-yellow-700"];
      default:
        return this.disabled
          ? ["bg-green-500"]
          : ["bg-green-500", "hover:bg-green-700"]
    }
  }
}
