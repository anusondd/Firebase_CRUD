import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController
  , public navParams: NavParams
  , private afAuth: AngularFireAuth
)
   {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  async ResetPassword(user : User){
    try {      
            const result = await  this.afAuth.auth.sendPasswordResetEmail(user.email);
            alert('Password Reset Email Sent!');
            console.log(result);
            
          } catch (error) {
            console.error(error);
          }
  }

}
