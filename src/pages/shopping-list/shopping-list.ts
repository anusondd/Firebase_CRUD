import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShoppingListPage } from '../add-shopping-list/add-shopping-list';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { ShoppingItem } from '../../app/models/shopping-item.interface';
import { EditShoppingListPage } from '../edit-shopping-list/edit-shopping-list';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

 

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>
  
  constructor(
      public navCtrl: NavController
    , public navParams: NavParams
    , private database: AngularFireDatabase
    , private actionSheetController:ActionSheetController
  ) { 

    this.shoppingItemRef$ = this.database.list('shopping-list');

    this.shoppingItemRef$.subscribe(x => console.log(x));
  }

  ionViewDidLoad() {
  }

  navagateToAddShoppingList(){

    this.navCtrl.push(AddShoppingListPage);
  }

  selectShoppingItem(shoppingItem){
    this.actionSheetController.create({
      title: shoppingItem.itemName,
      buttons:[
        {
          text: 'Edit',
          handler: () =>{
              this.navCtrl.push(EditShoppingListPage, { shoppingItemId : shoppingItem.$key });
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler:()=>{
              this.shoppingItemRef$.remove(shoppingItem.$key);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler:()=>{
            console.log("the user cancel");
          }
        }
      ]
    }).present();

  }

}
