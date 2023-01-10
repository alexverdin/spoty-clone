import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {defaultOptions: [], accessLink: []}; // inicializamos el objeto de mainMenu

  customOptions: Array<any> = [];

  constructor() {};

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/']
      },
      {
        name: 'Search',
        icon: 'uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Library',
        icon: 'uil-music',
        router: ['/', 'favorites']
      }
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear Lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ];

    this.customOptions = [
      {
        name: 'Mi lista N°1',
        router: ['/']
      },
      {
        name: 'Mi lista N°2',
        router: ['/']
      },
      {
        name: 'Mi lista N°3',
        router: ['/']
      }
    ]
  }
}
