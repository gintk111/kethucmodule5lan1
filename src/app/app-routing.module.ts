import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponentComponent} from './component/list-component/list-component.component';
import {CreateComponentComponent} from './component/create-component/create-component.component';
import {UpdateComponentComponent} from './component/update-component/update-component.component';

const routes: Routes = [
  {path: '', component: ListComponentComponent},
  {path: 'create-book', component: CreateComponentComponent},
  {path: 'update-book/:id', component: UpdateComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
