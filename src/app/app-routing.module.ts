import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MakeOutputComponent } from './make-output/make-output.component';
import { TakeInputComponent } from './take-input/take-input.component';
import { TakeDtComponent } from './take-dt/take-dt.component';
const routes: Routes = [
  {path:"take-input",component: TakeInputComponent},
  {path:"file-upload",component: FileUploadComponent},
  {path:"make-output",component:MakeOutputComponent},
  {path:"take-datatype",component: TakeDtComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TakeInputComponent,FileUploadComponent,MakeOutputComponent,TakeDtComponent]
