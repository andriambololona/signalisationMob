import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeSignalisationPage } from './liste-signalisation.page';

const routes: Routes = [
  {
    path: '',
    component: ListeSignalisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeSignalisationPageRoutingModule {}
