import { Shoe } from './../shoe';
import { getCurrentShoe } from './../state/shoes.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes-show',
  templateUrl: './shoes-show.component.html',
  styleUrls: ['./shoes-show.component.scss']
})
export class ShoesShowComponent implements OnInit {

  constructor(private store: Store) { }

  shoe: Shoe| null;

  ngOnInit(): void {
    this.store.select(getCurrentShoe).subscribe(shoe => {
      console.log(shoe);
      this.shoe = shoe;
      console.log(this.shoe);
    })
  }

}
