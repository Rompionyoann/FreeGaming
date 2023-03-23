import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavComponent } from './core/components/nav/nav.component';
import { PageHelpComponent } from './vitrine/page-help/page-help.component';
import { RouterModule } from '@angular/router';
import { PageHomeComponent } from './vitrine/page-home/page-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'pageHelp', component: PageHelpComponent},
      {path: 'pageHome', component: PageHomeComponent},
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
