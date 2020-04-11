import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestsPage } from './contests.page';

const routes: Routes = [
  {
    path: 'contests',
    component: ContestsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
              {
                path: '',
               loadChildren: () =>
                 import('../clu/clu.module').then(m => m.CluPageModule)
            }
         
        ]
      },
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../idea-list/idea-list.module').then(m => m.IdeaListPageModule)
          }
        ]
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () =>
             import('../faq/faq.module').then(m => m.FaqPageModule)
         }
       ]
      },
      {
        path: '',
        redirectTo: '/contests/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/contests/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestsPageRoutingModule { }
