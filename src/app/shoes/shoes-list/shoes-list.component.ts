import { ShoesService } from './../shoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent implements OnInit {

  constructor(private shoesService: ShoesService) { }

  shoes: any;

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes() {
    this.shoes = this.shoesService.getShoes();
  }
}
