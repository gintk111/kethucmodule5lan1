import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponentComponent } from './component/list-component/list-component.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponentComponent } from './component/create-component/create-component.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UpdateComponentComponent } from './component/update-component/update-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    CreateComponentComponent,
    UpdateComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
