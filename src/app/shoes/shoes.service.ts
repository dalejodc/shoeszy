import { tap } from 'rxjs/operators';
import { Shoe } from './shoe';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private http: HttpClient) {}

  getShoes(): Observable<Shoe[]> {
    return this.http.get<Shoe[]>('/assets/data/shoes.json')
  }
}
