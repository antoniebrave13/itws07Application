import { Routes } from '@angular/router';
import { BravoComponentComponent } from './bravo-component/bravo-component.component';
import { AngelineComponentComponent } from './angeline-component/angeline-component.component';

import { BuenoComponentComponent } from './bueno-component/bueno-component.component';

export const routes: Routes = [
    { path: 'bravo-component', component: BravoComponentComponent },
    { path: 'angeline-component', component: AngelineComponentComponent},
    { path: 'bravo-component', component: BravoComponentComponent },
    { path: 'bueno-component', component: BuenoComponentComponent }
]

