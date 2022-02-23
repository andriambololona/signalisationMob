import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSignalisationPageRoutingModule } from './detail-signalisation-routing.module';

import { DetailSignalisationPage } from './detail-signalisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSignalisationPageRoutingModule
  ],
  declarations: [DetailSignalisationPage]
})
export class DetailSignalisationPageModule {}
