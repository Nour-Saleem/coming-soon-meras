import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';

const routes: Routes = [
  { path: '', component: CommingSoonComponent }, 
  { path: 'home', component: LandingPageComponent }, 
  { path: '**', redirectTo: '' }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
