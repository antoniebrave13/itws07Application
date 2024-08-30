import { Routes } from '@angular/router';
import { BravoComponentComponent } from './bravo-component/bravo-component.component';
import { RonComponentComponent } from './ron-component/ron-component.component';
import { ElaComponentComponent } from './ela-component/ela-component.component';
import { MelvinComponentComponent } from './melvin-component/melvin-component.component';
import { JastineComponentComponent } from './jastine-component/jastine-component.component';
import { AngelineComponentComponent } from './angeline-component/angeline-component.component';

import { BuenoComponentComponent } from './bueno-component/bueno-component.component';
import { ArleneComponentComponent } from './arlene-component/arlene-component.component';
import { AlcheComponentComponent } from './alche-component/alche-component.component';

export const routes: Routes = [
    { path: 'bravo-component', component: BravoComponentComponent },
    { path: 'ela-component', component: ElaComponentComponent},
    { path: 'ron-component', component: RonComponentComponent},
    { path: 'melvin-component', component: MelvinComponentComponent},
    { path: 'jastine-component', component: JastineComponentComponent},
    { path: 'angeline-component', component: AngelineComponentComponent},
    { path: 'bueno-component', component: BuenoComponentComponent },
    { path: 'bueno-component', component: BuenoComponentComponent },
    { path: 'arlene-component', component: ArleneComponentComponent },
    { path: 'alche-component', component: AlcheComponentComponent }

  ];

