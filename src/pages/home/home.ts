import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { Profile } from '../../app/models/profile';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData : FirebaseObjectObservable<Profile>
  constructor(
    public navCtrl: NavController
  , public navParams: NavParams
  , private toast : ToastController
  , private afAuth: AngularFireAuth
  , private database: AngularFireDatabase
) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log('ionViewDidLoad ProfilesPage');
    
        console.log('ionViewDidLoad ShoppingListPage');
        this.afAuth.authState.subscribe(data => {
          console.log(data)
          if(data && data.email && data.uid){
              this.toast.create({
                message: 'Welcome to App'+data.email,
                duration:5000 
              }).present();

              this.profileData = this.database.object('profile/'+data.uid)
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

}
