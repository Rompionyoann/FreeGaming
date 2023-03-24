import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { NavSubscribeComponent } from './shared/nav-subscribe/nav-subscribe.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageHomeComponent } from './vitrine/page-home/page-home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavSubscribeComponent,
    FooterComponent,
    PageHomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],

 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
