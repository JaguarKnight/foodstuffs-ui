import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  menuItems = [
    {
      label: "first",
      link: "/"
    },
    {
      label: "second",
      link: "/"
    }
  ]
}
