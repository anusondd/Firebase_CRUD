import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingListPage } from '../pages/add-shopping-list/add-shopping-list';
import { EditShoppingListPage } from '../pages/edit-shopping-list/edit-shopping-list';


@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingListPage,
    EditShoppingListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Config FIREBASE_CREDENTIALS
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Config FIREBASE_DATABASE
    AngularFireDatabaseModule,
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    AddShoppingListPage,
    EditShoppingListPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
