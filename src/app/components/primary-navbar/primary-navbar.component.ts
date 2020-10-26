import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.scss']
})
export class PrimaryNavbarComponent implements OnInit {

  constructor() { }

  @ViewChild('expandedNavbar') el: ElementRef;

  ngOnInit(): void {
  }

  openNav() {
    const navbar = 80;
    const sidebarWidth = navbar + ((window.innerWidth - (navbar * 2)) / 2);
    this.el.nativeElement.style.zIndex = 1;
    this.el.nativeElement.style.visibility = 'visible';
    this.el.nativeElement.style.width = `${sidebarWidth}px`;
  }

  closeNav() {
    this.el.nativeElement.style.width = "0";
    this.el.nativeElement.style.zIndex = -1;
    this.el.nativeElement.style.visibility = 'hidden';
  }
}
