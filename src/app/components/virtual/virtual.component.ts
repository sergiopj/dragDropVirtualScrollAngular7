import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styles: []
})
export class VirtualComponent implements OnInit {
  
  // reference of object viewport
  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  people = Array(1000).fill(0);

  constructor() { }

  ngOnInit() {
    console.log(this.people);
  }

  goEnd() {
    this.viewport.scrollToIndex(this.people.length);
  }

  goMiddle() {
    this.viewport.scrollToIndex(this.people.length / 2);
  }


  goStart() {
    this.viewport.scrollToIndex(0);
  }

}
