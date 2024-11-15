import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ela-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ela-component.component.html',
  styleUrl: './ela-component.component.css'
})
export class ElaComponentComponent {
fullName: string = "Christine Angela Belogot";
course : string = "BSIT-4A";
userInfo : any = {
  age: 25,
  gender: "Female"
}
}
