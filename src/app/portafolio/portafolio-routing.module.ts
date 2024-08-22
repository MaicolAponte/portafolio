import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio.component';
import { NopageFoundComponent } from '../nopage-found/nopage-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home', component: PortafolioComponent, children: [
      { path: '', component: HomeComponent, data: {titulo: 'Home'}},
      { path: 'about', component: AboutComponent, data: {titulo: 'About'}},
      { path: 'projects', component: ProjectsComponent, data: {titulo: 'Projects'}},
      { path: 'contact', component: ContactComponent, data: {titulo: 'Contact'}}

    ]
  },
  {path: '**', component: NopageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
