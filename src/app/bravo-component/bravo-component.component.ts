import { Component } from '@angular/core';
import { BuenoComponentComponent } from '../bueno-component/bueno-component.component';

@Component({
  selector: 'app-bravo-component',
  standalone: true,
  imports: [BuenoComponentComponent],
  templateUrl: './bravo-component.component.html',
  // template: 'Sample Template',
  styleUrl: './bravo-component.component.css'
})
export class BravoComponentComponent {

}
