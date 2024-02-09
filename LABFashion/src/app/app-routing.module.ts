import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './components/pages/login/login.component';
import { ForgotpasswordComponent } from './components/pages/forgotpassword/forgotpassword.component';
import { SentLinkComponent } from './components/pages/sent-link/sent-link.component';
import { UserregistrationComponent } from './components/pages/userregistration/userregistration.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CollectionListingComponent } from './components/pages/collection-listing/collection-listing.component';
import { CollectionRegistrationComponent } from './components/pages/collection-registration/collection-registration.component';
import { CollectionEditionComponent } from './components/pages/collection-edition/collection-edition.component';
import { TemplateListingComponent } from './components/pages/template-listing/template-listing.component';
import { ModelRegistrationComponent } from './components/pages/model-registration/model-registration.component';
import { TemplateEditingComponent } from './components/pages/template-editing/template-editing.component';
import { FullComponent } from './components/hall/full/full.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userregistration',
    component: UserregistrationComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'forgotpassword/sent-link',
    component: SentLinkComponent
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'menu/anchor/dashboard',
        component: DashboardComponent
      },
      {
        path: 'menu/anchor/collection-listing',
        component: CollectionListingComponent
      },
      {
        path: 'menu/anchor/collection-registration',
        component: CollectionRegistrationComponent
      },
      {
        path: 'menu/anchor/collection-edition',
        component: CollectionEditionComponent
      },

      {
        path: 'menu/anchor/collection-edition/:id',
        component: CollectionEditionComponent
      },

      {
        path: 'menu/anchor/template-listing',
        component: TemplateListingComponent
      },
      {
        path: 'menu/anchor/template-editing/:id',
        component: TemplateEditingComponent
      },

      {
        path: 'menu/anchor/model-registration',
        component: ModelRegistrationComponent
      },
      {
        path: 'menu/anchor/template-editing',
        component: TemplateEditingComponent
      },]
  },
];













@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
