import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'dashboard',
    loadComponent:()=>import('./gifs/pages/dashborad-page/dashborad-page.component')
  ,
  children:[
  {
  path:'treding',
    loadComponent:()=>import('./gifs/pages/treding-page/treding-page.component')
  },
  // {
  //   path: 'history/:query',
  //   loadComponent:()=>import('./gifs/pages/search-page/search-page.component')
  // },
  {
    path:'search',
    loadComponent:()=>import('./gifs/pages/search-page/search-page.component')
  },
]
},
  {
    path:'**',
    redirectTo:'dashboard',
  }
];
