import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeSignalisationPageRoutingModule } from './liste-signalisation-routing.module';

import { ListeSignalisationPage } from './liste-signalisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeSignalisationPageRoutingModule
  ],
  declarations: [ListeSignalisationPage]
})
export class ListeSignalisationPageModule {}
