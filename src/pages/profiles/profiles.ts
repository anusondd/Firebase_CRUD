import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { Profile } from '../../app/models/profile';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {

  profile = {} as Profile;
  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private toast : ToastController
    , private afAuth: AngularFireAuth
    , private database: AngularFireDatabase
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');

    console.log('ionViewDidLoad ShoppingListPage');
    this.afAuth.authState.subscribe(data => {
      console.log(data)
      if(data && data.email && data.uid){
          this.toast.create({
            message: 'Welcome to App'+data.email,
            duration:5000 
          }).present();
        }
        else{
          this.toast.create({
            message: 'Could not fine ',
            duration:5000 
          }).present();
          this.navCtrl.setRoot(LoginPage);
        }
    });
  }

  createProfile(){
    this.afAuth.authState.subscribe(auth=>{
        this.database.object('profile/'+auth.uid).set(this.profile)
        .then(()=> this.navCtrl.setRoot(HomePage))
    })
  }

}
