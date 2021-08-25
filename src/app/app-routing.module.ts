import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './paginas/fotos/fotos.component';
import { QuemSomosComponent } from './paginas/quem-somos/quem-somos.component';
import { TemplateComponent } from './template/header/template.component';

const routes: Routes = [
  {path: 'header', component: TemplateComponent},
  {path: 'header/fotos', component: FotosComponent},
  {path: 'fotos', component: FotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
