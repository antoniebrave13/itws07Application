import { Component } from '@angular/core';

@Component({
  selector: 'app-melvin-component',
  standalone: true,
  imports: [],
  templateUrl: './melvin-component.component.html',
  styleUrl: './melvin-component.component.css'
})
export class MelvinComponentComponent {
  fullName: string = "Melvin Dioses";
  course : string = "BSIT-4A";
  userInfo : any = {
    age: 25,
    gender: "Male"
  }
}
