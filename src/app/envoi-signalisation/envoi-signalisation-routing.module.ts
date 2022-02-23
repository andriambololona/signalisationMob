import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvoiSignalisationPage } from './envoi-signalisation.page';

const routes: Routes = [
  {
    path: '',
    component: EnvoiSignalisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvoiSignalisationPageRoutingModule {}
