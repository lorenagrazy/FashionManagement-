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
  { path: 'login', component: LoginComponent },
  { path: 'userregistration', component: UserregistrationComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'forgotpassword/sent-link', component: SentLinkComponent },
  {
    path: 'menu/anchor',
    component: FullComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'collection-listing', component: CollectionListingComponent },
      { path: 'collection-registration', component: CollectionRegistrationComponent },
      { path: 'collection-edition', component: CollectionEditionComponent },
      { path: 'collection-edition/:id', component: CollectionEditionComponent },
      { path: 'template-listing', component: TemplateListingComponent },
      { path: 'template-editing/:id', component: TemplateEditingComponent },
      { path: 'model-registration', component: ModelRegistrationComponent },
      { path: 'template-editing', component: TemplateEditingComponent }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
