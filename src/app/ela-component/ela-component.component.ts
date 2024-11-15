import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-ela-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ela-component.component.html',
  styleUrl: './ela-component.component.css'
})
export class ElaComponentComponent {
// fullName: string = "Christine Angela Belogot";
// course : string = "BSIT-4A";
// userInfo : any = {
//   age: 25,
//   gender: "Female"
// }
// FirstName: string = "Angela";

// @Input('Title') Title: string;
// @Input('Body') Body: string;

@Output() NewItemEvent = new EventEmitter<string>();

addNewItem(value: string){
  this.NewItemEvent.emit(value);
}
}
