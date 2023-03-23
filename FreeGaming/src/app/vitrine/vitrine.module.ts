import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageHelpComponent } from './page-help/page-help.component';



@NgModule({
  declarations: [
    PageHomeComponent,
    PageHelpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VitrineModule { }
