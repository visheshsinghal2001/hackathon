import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TakeInputComponent } from './take-input/take-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MakeOutputComponent } from './make-output/make-output.component';
import { TakeDtComponent } from './take-dt/take-dt.component';
@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    TakeDtComponent,
  ],
  providers: [TakeInputComponent,TakeDtComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
