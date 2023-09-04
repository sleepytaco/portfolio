import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';


// import firebase services to use
// import { environment } from '../environments/environment'; 
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app'; // used to initialize firebase with our creds
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';  // use as backend database
// import { provideAuth,getAuth } from '@angular/fire/auth'; // to manage users


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
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
