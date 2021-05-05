import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomobileComponent } from './automobile/automobile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { CourierComponent } from './courier/courier.component';
import {HospitalsComponent} from './hospitals/hospitals.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LanguageInstitutesComponent } from './language-institutes/language-institutes.component';
import { MarketsComponent } from './markets/markets.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { RealestateComponent } from './realestate/realestate.component';
import { CarrentalComponent } from './carrental/carrental.component';

const routes: Routes = [
  {path:'', component: AutomobileComponent},
  {path:'side-nav', component: SideNavComponent},
  {path: 'concerts', component: ConcertsComponent},
  {path: 'courier', component: CourierComponent},
  {path: 'hospitals', component: HospitalsComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'language-institutes', component: LanguageInstitutesComponent},
  {path: 'markets', component: MarketsComponent},
  {path: 'pharmacy', component:PharmacyComponent},
  {path: 'realestate', component:RealestateComponent},
  {path: 'carrental', component:CarrentalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
