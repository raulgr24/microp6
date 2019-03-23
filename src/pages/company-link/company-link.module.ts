import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyLinkPage } from './company-link';

@NgModule({
  declarations: [
    CompanyLinkPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyLinkPage),
  ],
})
export class CompanyLinkPageModule {}
