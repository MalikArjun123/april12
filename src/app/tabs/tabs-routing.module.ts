import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    //  {
      //  path: 'tab1',
     //   children: [
       //   {
     //       path: '',
       //     loadChildren: () =>
       //       import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        //  }
      //  ]
    ///  },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'analysis',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../return/return.module').then(m => m.ReturnPageModule)
              // import('../analysis/analysis.module').then(m => m.AnalysisPageModule)

          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
