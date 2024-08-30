import { Routes } from '@angular/router';
import { BravoComponentComponent } from './bravo-component/bravo-component.component';
import { RonComponentComponent } from './ron-component/ron-component.component';
import { ElaComponentComponent } from './ela-component/ela-component.component';
import path from 'node:path';
import { MelvinComponentComponent } from './melvin-component/melvin-component.component';
import { JastineComponentComponent } from './jastine-component/jastine-component.component';

export const routes: Routes = [
    { path: 'bravo-component', component: BravoComponentComponent },
    {path: 'ron-component', component: RonComponentComponent},
    {path: 'ela-component', component: ElaComponentComponent},
    {path: 'melvin-component', component: MelvinComponentComponent},
    {path: 'jastine-component', component: JastineComponentComponent}
  ];


