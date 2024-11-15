import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ron-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ron-component.component.html',
  styleUrl: './ron-component.component.css'
})
export class RonComponentComponent {
  fullName: string = "Ronald Bravo";
  course : string = "BSIT-4A";
  userInfo : any = {
    age: 34,
    gender: "Male"
  }
}
