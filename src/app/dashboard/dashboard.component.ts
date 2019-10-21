
import { Component, ViewChildren, QueryList, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import {CdkDropList, CdkDragDrop, CdkDragEnter, moveItemInArray} from '@angular/cdk/drag-drop';

const COLORS = [
  '#ea4335',
  '#4285f4',
  '#fbbc04',
  '#34a853',
  '#fa7b17',
  '#f538a0',
  '#a142f4',
  '#24c1e0',
  '#9aa0a6',
  '#5195ea',
  '#e25142',
  '#f5c518',
  '#41af6a',
  '#f6aea9',
  '#a50e0e',
  '#aecbfa',
  '#174ea6',
  '#fde293',
  '#a8dab5',
  '#0d652d',
  '#fdc69c',
  '#fba9d6',
  '#c92786',
  '#d7aefb',
  '#8430ce',
  '#a1e4f2',
  '#007b83',
  '#e8eaed',
  '#b9d4f6',
  '#f3b9b3',
  '#fbe7a2',
  '#b3dfc3',
]

function getColor() {
  return COLORS[Math.floor(Math.random() * 32)];
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  entered($event: CdkDragEnter) {
    console.log($event.item.data, $event.container.data);
    moveItemInArray(this.cards, $event.item.data, $event.container.data);
  }
  entered2($event: CdkDragEnter) {
    console.log($event.item.data, $event.container.data);
    moveItemInArray(this.cards, $event.item.data, $event.container.data);
  }

  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>;

  drops: CdkDropList[];

  ngAfterViewInit() {
    this.dropsQuery.changes.subscribe(() => {
      this.drops = this.dropsQuery.toArray()
    })
    Promise.resolve().then(() => {
      this.drops = this.dropsQuery.toArray();
      console.log(this.drops);
    })
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = [
    { title: '1', cols: 2, rows: 1, color: getColor()},
    { title: '2', cols: 1, rows: 1, color: getColor() },
    { title: '3', cols: 1, rows: 1, color: getColor() },
    { title: '4', cols: 1, rows: 1, color: getColor() },
    { title: '5', cols: 1, rows: 2, color: getColor() },
    { title: '6', cols: 2, rows: 1, color: getColor() },
    { title: '7', cols: 2, rows: 2, color: getColor() },
    { title: '8', cols: 1, rows: 1, color: getColor() },
    { title: '9', cols: 2, rows: 1, color: getColor() },
    { title: '10', cols: 2, rows: 1, color: getColor() },
    /* { title: '11', cols: 1, rows: 1, color: getColor() },
    { title: '12', cols: 2, rows: 1, color: getColor() },
    { title: '13', cols: 1, rows: 1, color: getColor() },
    { title: '14', cols: 1, rows: 1, color: getColor() },
    { title: '15', cols: 1, rows: 2, color: getColor() },
    { title: '16', cols: 2, rows: 1, color: getColor() },
    { title: '17', cols: 1, rows: 1, color: getColor() },
    { title: '18', cols: 2, rows: 1, color: getColor() },
    { title: '19', cols: 1, rows: 1, color: getColor() },
    { title: '20', cols: 1, rows: 1, color: getColor() },
    { title: '21', cols: 1, rows: 1, color: getColor()},
    { title: '22', cols: 1, rows: 1, color: getColor() },
    { title: '23', cols: 1, rows: 1, color: getColor() },
    { title: '24', cols: 1, rows: 1, color: getColor() },
    { title: '25', cols: 1, rows: 1, color: getColor() },
    { title: '26', cols: 1, rows: 1, color: getColor() },
    { title: '27', cols: 1, rows: 1, color: getColor() },
    { title: '28', cols: 1, rows: 1, color: getColor() },
    { title: '29', cols: 1, rows: 1, color: getColor() } */
   ];

}
