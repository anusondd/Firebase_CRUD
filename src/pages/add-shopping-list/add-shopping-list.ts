import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../app/models/shopping-item.interface';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-add-shopping-list',
  templateUrl: 'add-shopping-list.html',
})
export class AddShoppingListPage {

  shoppingItem = {} as ShoppingItem;


  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private database: AngularFireDatabase
  ) { 

    this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingListPage');
  }

  addShoppingItem(shoppingItem: ShoppingItem){

    console.log(shoppingItem);
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    this.shoppingItem = {} as ShoppingItem;

    this.navCtrl.pop();
  }

}
