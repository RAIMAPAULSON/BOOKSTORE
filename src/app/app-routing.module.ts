import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:':id/update',component:UpdateComponent},
  {path:':id/read',component:ReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
