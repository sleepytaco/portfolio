import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';


// import firebase services to use
import { environment } from '../environments/environment'; 
// import { provideAuth,getAuth } from '@angular/fire/auth'; // to manage user auth
import { AngularFireModule } from '@angular/fire/compat'; // used to initialize firebase with our creds
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';  // use as backend database


@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PortfolioModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
