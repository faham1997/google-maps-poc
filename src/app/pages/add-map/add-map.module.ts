import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMapPageRoutingModule } from './add-map-routing.module';

import { AddMapPage } from './add-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMapPageRoutingModule
  ],
  declarations: [AddMapPage]
})
export class AddMapPageModule {}
