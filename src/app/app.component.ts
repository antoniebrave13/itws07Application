import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElaComponentComponent } from './ela-component/ela-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElaComponentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'itwso7';
  
  items = ['item1','item2','item3','item4'];

  addItem(newItem: string){
    console.log({newItem: newItem})
    this.items.push(newItem);
  }
}

