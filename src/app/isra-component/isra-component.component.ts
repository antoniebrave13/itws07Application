import { Component } from '@angular/core';

@Component({
  selector: 'app-isra-component',
  standalone: true,
  imports: [],
  templateUrl: './isra-component.component.html',
  styleUrl: './isra-component.component.css'
})
export class IsraComponentComponent {
  fullName: string = "John Israel Dangan";
  course : string = "BSIT-4A";
  userInfo : any = {
    age: 25,
    gender: "Male"
  }
}
