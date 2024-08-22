import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    PortafolioComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    SharedModule,
  ]
})
export class PortafolioModule { }
