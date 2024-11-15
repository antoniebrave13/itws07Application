import { Component } from '@angular/core';

@Component({
  selector: 'app-ron-component',
  standalone: true,
  imports: [],
  templateUrl: './ron-component.component.html',
  styleUrl: './ron-component.component.css'
})
export class RonComponentComponent {
  fullName: string = "Ronald Bravo";
  course : string = "BSIT-4A";
  userInfo : any = {
    age: 25,
    gender: "Male"
  }
}
