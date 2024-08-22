import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Menu } from '../../interfaces/portafolio_interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: Menu[] = [
    { label: "Home", url: "home", icon: "fa-solid fa-house"},
    { label: "About", url: "home/about", icon:"fa-solid fa-user"},
    { label: "Projects", url: "home/projects", icon:"fa-solid fa-list"},
    { label: "Contact", url: "home/contact", icon:"fa-solid fa-address-book"},
  ]
  icon: string = "fa-solid fa-bars"
  abrirNav() {
    let navbar = document.querySelector('.navbar')
    navbar?.classList.toggle("active")
    if (this.icon == "fa-solid fa-bars") {
      this.icon = "fa-solid fa-xmark"
    } else {
      this.icon = "fa-solid fa-bars"
    }
  }

  ngOnInit() {
 
  }  
}
