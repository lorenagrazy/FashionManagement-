import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/pages/forgotpassword/forgotpassword.component';
import { UserregistrationComponent } from './components/pages/userregistration/userregistration.component';
import { CollectionListingComponent } from './components/pages/collection-listing/collection-listing.component';
import { CollectionRegistrationComponent } from './components/pages/collection-registration/collection-registration.component';
import { CollectionEditionComponent } from './components/pages/collection-edition/collection-edition.component';
import { TemplateListingComponent } from './components/pages/template-listing/template-listing.component';
import { ModelRegistrationComponent } from './components/pages/model-registration/model-registration.component';
import { TemplateEditingComponent } from './components/pages/template-editing/template-editing.component';
import { MenuComponent } from './components/hall/menu/menu.component';
import { AnchorComponent } from './components/hall/anchor/anchor.component';
import { SentLinkComponent } from './components/pages/sent-link/sent-link.component';
import { FullComponent } from './components/hall/full/full.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    UserregistrationComponent,
    CollectionListingComponent,
    CollectionRegistrationComponent,
    CollectionEditionComponent,
    TemplateListingComponent,
    ModelRegistrationComponent,
    TemplateEditingComponent,
    MenuComponent,
    AnchorComponent,
    SentLinkComponent,
    FullComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
