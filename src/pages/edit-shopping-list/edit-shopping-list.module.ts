import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditShoppingListPage } from './edit-shopping-list';

@NgModule({
  declarations: [
    EditShoppingListPage,
  ],
  imports: [
    IonicPageModule.forChild(EditShoppingListPage),
  ],
})
export class EditShoppingListPageModule {}
