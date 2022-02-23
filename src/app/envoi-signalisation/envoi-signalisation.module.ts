import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvoiSignalisationPageRoutingModule } from './envoi-signalisation-routing.module';

import { EnvoiSignalisationPage } from './envoi-signalisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvoiSignalisationPageRoutingModule
  ],
  declarations: [EnvoiSignalisationPage]
})
export class EnvoiSignalisationPageModule {}
