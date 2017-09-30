import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../app/models/shopping-item.interface';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'page-edit-shopping-list',
  templateUrl: 'edit-shopping-list.html',
})
export class EditShoppingListPage {

  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>
  shoppingItem = {} as ShoppingItem;
  shoppingItemSubscription: Subscription;
  

  constructor(
        public navCtrl: NavController
      , public navParams: NavParams
      , private database: AngularFireDatabase
    ) {
      const shoppingItemId = this.navParams.get('shoppingItemId'); 
      console.log(shoppingItemId);    
      
      this.shoppingItemRef$ = this.database.object('shopping-list/'+shoppingItemId);
      
      this.shoppingItemSubscription =
      this.shoppingItemRef$.subscribe(Item => 
        this.shoppingItem = Item );

      console.log(this.shoppingItem.itemName);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingListPage');
  }

  editShoppingItem(shoppingItem: ShoppingItem){
    this.shoppingItemRef$.update(shoppingItem);
    this.navCtrl.pop();
  }

  ionViewWillLeav(){
    this.shoppingItemSubscription.unsubscribe();
  }

}
