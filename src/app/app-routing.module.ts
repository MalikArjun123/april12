import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 // {
  //  path: 'tab4',
  //  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //},
  { 
    path: 'tab1', loadChildren:   './tab1/tab1.module#Tab1PageModule'
   } ,
   { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
 
  {
  path: '', loadChildren:   './tutorial/tutorial.module#TutorialModule'
 } ,
 { path: 'loginpage', loadChildren: './loginpage/loginpage.module#LoginpagePageModule' },
 {
   path: '', loadChildren:   './contests/contests.module#ContestsPageModule'
    } ,
  // {
  //  path: '', loadChildren:   './mycontests/myco.module#MycoPageModule'
  // } ,
   {
    path: '', loadChildren:  './tabs/tabs.module#TabsPageModule'
   } ,
   { path: 'note', loadChildren: './idea-list/idea-list.module#IdeaListPageModule' },
  { path: 'idea', loadChildren: './idea-details/idea-details.module#IdeaDetailsPageModule' },
  { path: 'idea/:id', loadChildren: './idea-details/idea-details.module#IdeaDetailsPageModule' },
   {
  path: 'feed', loadChildren:  './feed/feed.module#FeedPageModule'
  } ,
  // {
  //   path: '', loadChildren:  './ranalysis/ranalysis.module#RanalysisPageModule'
  //   } ,
  {
    path: 'analysis',
    loadChildren: () => import('./analysis/analysis.module').then( m => m.AnalysisPageModule)
  },
    {
      path: 'ranalysis',
      loadChildren: () => import('./ranalysis/ranalysis.module').then( m => m.RanalysisPageModule)
    },
    {
      path: 'janalysis',
      loadChildren: () => import('./janalysis/janalysis.module').then( m => m.JanalysisPageModule)
    },
     {
      path: 'aanalysis',
      loadChildren: () => import('./aanalysis/aanalysis.module').then( m => m.AanalysisPageModule)
    },
    {
      path: 'roanalysis',
      loadChildren: () => import('./roanalysis/roanalysis.module').then( m => m.RoanalysisPageModule)
    },
     {
      path: 'hanalysis',
      loadChildren: () => import('./hanalysis/hanalysis.module').then( m => m.HanalysisPageModule)
    },
     {
      path: 'sanalysis',
      loadChildren: () => import('./sanalysis/sanalysis.module').then( m => m.SanalysisPageModule)
    },
    
  // {
  //   path: 'graph', loadChildren:  './analysis/analysis.module#AnalysisPageModule'
  //   } ,
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  
 // {
 // path: '', loadChildren:   './tab1/tab1.module#Tab1PageModule'
  // } ,
    
  //    {
   //     path: 'tab3', loadChildren:   './tab3/tab3.module#Tab3PageModule'
    //    } , 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
