import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor() { }

  items = [
    {
      image: '',
      background: '#D6C3EA',
    },
    {
      image: '',
      background: '#FDECB0',
    },
    {
      image: '',
      background: '#EDEDEF',
    },
    {
      image: '',
      background: '#F9C9CE',
    },
    {
      image: '',
      background: '#C79D82',
    },
    {
      image: '',
      background: 'brown',
    }
  ]

  getShoes() {
    return this.items;
  }
}
