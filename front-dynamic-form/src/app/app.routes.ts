import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormListComponent } from '../app/components/form-list/form-list.component';
import { DynamicFormComponent } from '../app/components/dynamic-form/dynamic-form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: FormListComponent },
  { path: 'formulario/:id', component: DynamicFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [AppComponent, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }