import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

 @Input()   dataFromParent:CardType;

 @Output() myEvent=new EventEmitter();
 addItem(){

    this.myEvent.emit("One item added")
 }
 

}

interface CardType{
  title:string;
  description:string;
  image:string;
}