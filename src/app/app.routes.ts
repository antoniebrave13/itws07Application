import { Routes } from '@angular/router';
import { BravoComponentComponent } from './bravo-component/bravo-component.component';
import { RonComponentComponent } from './ron-component/ron-component.component';
import { ElaComponentComponent } from './ela-component/ela-component.component';
import { MelvinComponentComponent } from './melvin-component/melvin-component.component';
import { JastineComponentComponent } from './jastine-component/jastine-component.component';
import { AngelineComponentComponent } from './angeline-component/angeline-component.component';
import { BuenoComponentComponent } from './bueno-component/bueno-component.component';
import { ArleneComponentComponent } from './arlene-component/arlene-component.component';
import { KingComponentComponent } from './king-component/king-component.component';
import { AlcheComponentComponent } from './alche-component/alche-component.component';
import { CuritanaComponentComponent } from './curitana-component/curitana-component.component';
import { FroilanComponentComponent } from './froilan-component/froilan-component.component';
import { JpComponentComponent } from './jp-component/jp-component.component';
import { YuniComponentComponent } from './yuni-component/yuni-component.component';
import { ElyComponentComponent } from './ely-component/ely-component.component';
import { AramayComponentComponent } from './aramay-component/aramay-component.component';
import { JessaComponentComponent } from './jessa-component/jessa-component.component';
import { HarvieComponentComponent } from './harvie-component/harvie-component.component';
import { AlbertoComponentsComponent } from './alberto-components/alberto-components.component';
import { JennaComponentComponent } from './jenna-component/jenna-component.component';
import { LycaComponentComponent } from './lyca-component/lyca-component.component';
import { MirariComponentComponent } from './mirari-component/mirari-component.component';
import { PeningComponentComponent } from './pening-component/pening-component.component';
import { MonicaComponentComponent } from './monica-component/monica-component.component';
import { AnneComponentComponent } from './anne-component/anne-component.component';
import { KristineComponentComponent } from './kristine-component/kristine-component.component';
import { HomeComponent } from './home/home.component';
import { IsraComponentComponent } from './isra-component/isra-component.component';
import { GanteComponentComponent } from './gante-component/gante-component.component';
import { AgbuyaComponentComponent } from './agbuya-component/agbuya-component.component';
import { RanaComponentComponent } from './rana-component/rana-component.component';

// export const routes: Routes = [
//   { path: 'bravo-component', component: BravoComponentComponent },
//   { path: 'ela-component', component: ElaComponentComponent },
//   { path: 'ron-component', component: RonComponentComponent },
//   { path: 'melvin-component', component: MelvinComponentComponent },
//   { path: 'jastine-component', component: JastineComponentComponent },
//   { path: 'angeline-component', component: AngelineComponentComponent },
//   { path: 'bueno-component', component: BuenoComponentComponent },
//   { path: 'arlene-component', component: ArleneComponentComponent },
//   { path: 'king-component', component: KingComponentComponent },
//   { path: 'alche-component', component: AlcheComponentComponent },
//   { path: 'curitana-component', component: CuritanaComponentComponent },
//   { path: 'froilan-component', component: FroilanComponentComponent },
//   { path: 'yuni-component', component: YuniComponentComponent },
//   { path: 'ely-component', component: ElyComponentComponent },
//   { path: 'jp-component', component: JpComponentComponent },
//   { path: 'alberto-component', component: AlbertoComponentsComponent },
//   { path: 'jenna-component', component: JennaComponentComponent },
//   { path: 'lyca-component', component: LycaComponentComponent },
//   { path: 'jessa-component', component: JessaComponentComponent },
//   { path: 'harvie-component', component: HarvieComponentComponent },
//   { path: 'aramay-component', component: AramayComponentComponent },
//   { path: 'mirari-component', component: MirariComponentComponent },
//   { path: 'pening-component', component: PeningComponentComponent },
//   { path: 'monica-component', component: MonicaComponentComponent },
//   { path: 'anne-component', component: AnneComponentComponent },
//   { path: 'kristine-component', component: KristineComponentComponent},
// ];
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full',
  },
  { path: 'app-home', component: HomeComponent },
  {
    path: 'bravo-component',
    component: BravoComponentComponent,
  },
  { 
    path: 'angeline-component',
     component: AngelineComponentComponent 
  },
  
  {
    path: 'curitana-component',
     component: CuritanaComponentComponent
  },
  { path: 'mirari-component', 
    component: MirariComponentComponent
  },
  {
    path: 'app-kristine-component',
    component: KristineComponentComponent,
  },
  { path: 'anne-component', component: AnneComponentComponent },
  {
    path: 'bueno-component',
    component: BuenoComponentComponent,
  },
  { path: 'ela-component', component: ElaComponentComponent },

  {
    path: 'isra-component',
    component: IsraComponentComponent,
  },
  {
    path: 'gante-component',
    component: GanteComponentComponent,
  },
  {
    path: 'agbuya-component',
    component: AgbuyaComponentComponent,
  },
  {
    path: 'rana-component',
    component: RanaComponentComponent,
  },
  {
    path: 'jastine-component',
    component: JastineComponentComponent,
  },
  { path: 'alche-component', 
    component: AlcheComponentComponent 
  },
  { path: 'harvie-component', 
    component: HarvieComponentComponent 
  },
  { path: 'ely-component', 
    component: ElyComponentComponent 
  },
  { path: 'arlene-component', 
    component: ArleneComponentComponent 
  },
  { path: 'yuni-component', 
    component: YuniComponentComponent 
  },
  {
    path: 'ron-component',
    component: RonComponentComponent,
  },
];