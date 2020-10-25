import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-shoes';

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
}
