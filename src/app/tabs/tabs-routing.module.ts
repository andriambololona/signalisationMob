import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'liste-signalisation',
        loadChildren: () => import('../liste-signalisation/liste-signalisation.module').then(m => m.ListeSignalisationPageModule)
      },
      {
        path: 'envoi-signalisation',
        loadChildren: () => import('../envoi-signalisation/envoi-signalisation.module').then(m => m.EnvoiSignalisationPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/liste-signalisation',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/liste-signalisation',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
