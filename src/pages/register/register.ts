import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  user = {} as User;

  
  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private afAuth: AngularFireAuth
  )
     {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user:User){
    try {

      const result = await  this.afAuth.auth.createUserWithEmailAndPassword(user.email,
        user.password);
        console.log(result);
      
    } catch (error) {
      console.error(error);
    }
    this.navCtrl.setRoot(LoginPage);
  }

}
