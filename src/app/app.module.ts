import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig, masterGoogleMaps } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LandingComponent } from './landing/landing.component';
import { LocationComponent } from './location/location.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { InfoComponent } from './info/info.component';
// import { StyledMapDirective } from './styled-map.directive';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LocationComponent,
    InfoComponent,
    // StyledMapDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
     apiKey: masterGoogleMaps.apiKey
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
