import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { CourierComponent } from './courier/courier.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LanguageInstitutesComponent } from './language-institutes/language-institutes.component';
import { MarketsComponent } from './markets/markets.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { RealestateComponent } from './realestate/realestate.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CarrentalComponent } from './carrental/carrental.component';


@NgModule({
  declarations: [
    AppComponent,
    AutomobileComponent,
    HospitalsComponent,
    PharmacyComponent,
    HotelsComponent,
    LanguageInstitutesComponent,
    MarketsComponent,
    RealestateComponent,
    ConcertsComponent,
    CourierComponent,
    SideNavComponent,
    CarrentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
