import { Shoe } from './shoe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  shoes: Array<Shoe> = [];

  constructor() {
    this.shoes = [
      {
        id: null,
        name: 'Yeezy',
        description: 'Yeezy',
        price: 99.99,
        photos: [],
        backgroundColor: '#D6C3EA'
      },
      {
        id: null,
        name: 'Predator',
        description: 'Predator',
        price: 99.99,
        photos: [],
        backgroundColor: '#FDECB0'
      },
      {
        id: null,
        name: 'Samba',
        description: 'Samba',
        price: 99.99,
        photos: [],
        backgroundColor: '#EDEDEF'
      },
      {
        id: null,
        name: 'NMD',
        description: 'NMD',
        price: 99.99,
        photos: [],
        backgroundColor: '#F9C9CE'
      },
      {
        id: null,
        name: 'Ultraboost',
        description: 'Ultraboost 19',
        price: 99.99,
        photos: [],
        backgroundColor: '#C79D82'
      },
      {
        id: null,
        name: 'Stan Smith',
        description: 'Stan Smith',
        price: 89.99,
        photos: [],
        backgroundColor: '#FDECB0'
      }
    ]
  }

  getShoes() {
    return this.shoes;
  }
}
