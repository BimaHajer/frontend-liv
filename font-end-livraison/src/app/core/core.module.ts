import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,ClarityModule
  ],exports:[HeaderComponent,
    SidenavComponent]
})
export class CoreModule { }
