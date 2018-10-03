import { Component, OnInit } from '@angular/core';
import { sortEvent } from '../draggable/sortable-list.directive';


function remove(item: string, list: string[]){
  if(list.indexOf(item) !== -1){
    list.splice(list.indexOf(item), 1);
  }
}

@Component({
  selector: 'app-g-main',
  templateUrl: './g-main.component.html',
  styleUrls: ['./g-main.component.scss']
})
export class GMainComponent implements OnInit {
  
  //In Progress
  sortableList = ['Input File','Input Table','Map','Aggregate', 'Join', 'Filter', 'Output File', 'Output Table'];
  availableBoxes = ['Input File','Input Table','Map','Aggregate', 'Join', 'Filter', 'Output File', 'Output Table'];
  dropzone = []
  currentBox?: string;
  
  ngOnInit(): void {}

  sort(event: sortEvent){
  const current = this.sortableList[event.currentIndex];
  const swapWith = this.sortableList[event.newIndex];
  this.sortableList[event.newIndex] = current;
  this.sortableList[event.currentIndex] = swapWith;
  }
  
  move(box: string, toList: string[]): void {
    remove(box, this.availableBoxes);
    remove(box, this.dropzone);
    toList.push(box);
  
  }
}
